import { getFiles, getFileBySlug } from '../../lib/mdx'
import { MDXRemote } from 'next-mdx-remote'
import BlogLayout from '../../layout/blog'
import MDXComponents from '../../components/MDXComponents'
import { useRouter } from 'next/router'

const BlogPost = ({ mdxSource, frontMatter }) => {

  const router = useRouter()
  const { slug } = router.query

  return <BlogLayout slug={slug} frontMatter={frontMatter}>
    <MDXRemote {...mdxSource} components={MDXComponents} />
  </BlogLayout>;
}

export async function getStaticPaths() {
  const posts = await getFiles('blog');

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, '')
      }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug('blog', params.slug);

  return { props: { ...post } }
}

export default BlogPost
