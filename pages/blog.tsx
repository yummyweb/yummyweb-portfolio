import { useState, useCallback } from 'react'
import Page from '../components/page'
import Search from '../components/search'
import styles from '../styles/blog.module.scss'
import { Meta } from 'types'

export type BlogPosts = Array<{ content: string; filePath: string; meta: Meta }>

type BlogProps = {
    posts: BlogPosts
}

const Blog = ({ post }: BlogProps): JSX.Element => {
    const [search, setSearch] = useState('')

    return (
        <Page active="Blog">
            <div className="main">
                <h1>Blog</h1>
                <hr/>
                <div className={styles.search}>
                    <Search value={search} onChange={e => setSearch(e.target.value)} placeholder={"Search blog posts"} />
                </div>
            </div>
        </Page>
    )
}

export default Blog
