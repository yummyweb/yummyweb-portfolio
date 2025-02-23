import Image from 'next/image'
import { parseISO, format } from 'date-fns'
import styles from '../styles/blog.module.scss'

import Page from '../components/page'
// import ViewCounter from '@/components/ViewCounter'

export default function BlogLayout({ children, frontMatter, slug }: { children, frontMatter, slug }): JSX.Element {
  return (
    <Page
      active="Blog"
    >
      <div className="main">
        <article className={styles.article}>
          <span className={styles.imgWrapper}>
            <Image alt="" src={frontMatter.image} width={2024} height={1012} layout="responsive" />
          </span>
          <h1>
            {frontMatter.title}
          </h1>
          <div>
            <div className={styles.publishedBy}>
              {/* <Image
                alt={frontMatter.author}
                height={20}
                width={20}
                src={frontMatter.authorImage}
                className={styles.authorImage}
              /> */}
              <p className={styles.by}>
                By {frontMatter.author}
              </p>
            </div>
            <p className={styles.by}>
              {frontMatter.readingTime.text}
              {` • `}
              {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
              {` • `}
              {/* <ViewCounter slug={frontMatter.slug} /> */}
              11 views
            </p>
          </div>
          <div className="prose dark:prose-dark max-w-none w-full">
            {children}
          </div>
          <hr />
          <a href={`https://twitter.com/intent/tweet?text=${encodeURI('Hey check out this blog post by @AntarikshaVerm2.\n\nhttps://yummyweb.vercel.app/blog/' + slug)}`}
            target="__blank"
            className={styles.tweetButton}>
            <span>Share on Twitter</span>
          </a>
        </article>
      </div>
    </Page>
  );
}