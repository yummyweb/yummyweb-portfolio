import type { BlogPosts } from '../pages/blog'
import styles from '../styles/post-list.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { parseISO, format } from 'date-fns'

interface IProps {
    posts: BlogPosts
}

const PostList = ({ posts }: IProps): JSX.Element => {
    return (
        <ul className={styles.posts}>
            {posts.length === 0 && <p className={styles.noResults}>🧐 Oops... no posts found!</p>}
            {posts.map(post => {
                const {
                    meta: { summary, title, readingTime: readTime, publishedAt, image },
                } = post
                const slug = post.filePath.replace(/\.mdx?$/, '')
                return (
                    <li key={post.filePath}>
                        <Link as={`/blog/${slug}`} href="/blog/[slug]">
                            <a aria-label={title}>
                                <span className={styles.imgWrapper}>
                                    <Image sizes="99%" style={{ width: '99%', height: 'auto' }} width={0} height={0} src={image} alt={title} />
                                </span>
                            </a>
                        </Link>
                        <Link as={`/blog/${slug}`} href="/blog/[slug]">
                            <a className={styles.title}>{title}</a>
                        </Link>
                        <p className={styles.summary}>{summary}</p>
                        <p className={styles.meta}>
                            Published on <time dateTime={publishedAt}>{format(parseISO(publishedAt), 'MMMM dd, yyyy')}</time> &middot; {readTime.text}
                        </p>
                    </li>
                )
            })}
        </ul>
    )
}

export default PostList
