import { useState, useCallback } from 'react'
import Page from '../components/page'
import Search from '../components/search'
import PostList from '../components/post-list'
import styles from '../styles/blog.module.scss'
import { Meta } from '../types'
import readingTime from 'reading-time'
import fs from 'fs'
import matter from 'gray-matter'
import { GetStaticProps } from 'next'
import path from 'path'
import { postFilePaths, POSTS_PATH } from '../utils/mdxUtils'

export type BlogPosts = Array<{ content: string; filePath: string; meta: Meta }>

interface IProps {
    posts: BlogPosts
}

const Blog = ({ posts }: IProps): JSX.Element => {
    const [search, setSearch] = useState('')

    return (
        <Page active="Blog">
            <div className="main">
                <h1>Blog</h1>
                <hr/>
                <div className={styles.search}>
                    <Search value={search} onChange={e => setSearch(e.target.value)} placeholder={"Search blog posts"} />
                </div>
                <PostList posts={posts} />
            </div>
        </Page>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const posts = postFilePaths.map(filePath => {
      const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
      const { content, data } = matter(source)
  
      return {
        content,
        meta: { ...data, readingTime: readingTime(content) },
        filePath,
      }
    })
  
    return { props: { posts } }
}

export default Blog
