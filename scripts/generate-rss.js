const { promises: fs } = require('fs')
const path = require('path')
const RSS = require('rss')
const matter = require('gray-matter')

async function generate() {
  const feed = new RSS({
    title: 'yum',
    site_url: 'https://yummyweb.vercel.app',
    feed_url: 'https://yummyweb.vercel.app/feed.xml',
  })

  const posts = await fs.readdir(path.join(__dirname, '..', 'data', 'blog'))

  await Promise.all(
    posts.map(async name => {
      const content = await fs.readFile(path.join(__dirname, '..', 'data', 'blog', name))
      const frontmatter = matter(content)

      feed.item({
        title: frontmatter.data.title,
        url: 'https://yummyweb.vercel.app/blog/' + name.replace(/\.mdx?/, ''),
        date: frontmatter.data.publishedAt,
        description: frontmatter.data.summary,
      })
    }),
  )
  // You need to be in root directory for this to execute properly
  await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }))
}

generate()