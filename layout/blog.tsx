import Image from 'next/image'
import { parseISO, format } from 'date-fns'
import styles from '../styles/blog.module.scss'

import Page from '../components/page'
// import ViewCounter from '@/components/ViewCounter'

const editUrl = (slug) =>
  `https://github.com/yummyweb/yummyweb-portfolio/edit/main/data/blog/${slug}.mdx`;
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://leerob.io/blog/${slug}`
  )}`;

export default function BlogLayout({ children, frontMatter }: { children, frontMatter }): JSX.Element {
  return (
    <Page
      active="Blog"
    >
      <div className="main">
        <article className={styles.article}>
          <span className={styles.imgWrapper}>
            <Image src={frontMatter.image} width={2024} height={1012} layout="responsive" />
          </span>          
          <h1>
            {frontMatter.title}
          </h1>
          <div>
            <div className={styles.publishedBy}>
              <Image
                alt="yum"
                height={24}
                width={24}
                src={frontMatter.authorImage}
                className={styles.authorImage}
              />
              <p className="text-sm text-gray-700 dark:text-gray-300 ml-2">
                {frontMatter.by}
                {'Lee Robinson / '}
                {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
              </p>
            </div>
            <p className="text-sm text-gray-500 min-w-32 mt-2 md:mt-0">
              {frontMatter.readingTime.text}
              {` • `}
              {/* <ViewCounter slug={frontMatter.slug} /> */}
              1220
            </p>
          </div>
          <div className="prose dark:prose-dark max-w-none w-full">
            {children}
          </div>
        </article>
      </div>
    </Page>
  );
}