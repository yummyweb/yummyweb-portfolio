import { useState, useCallback } from 'react'
import Page from '../components/page'
import debounce from 'lodash.debounce'
import Search from '../components/search'

export type BlogPosts = Array<{ content: string; filePath: string; meta: Meta }>

type BlogProps = {
    posts: BlogPosts
}

const Blog = ({ post }: BlogProps): JSX.Element => {
    const [search, setSearch] = useState('')
    const trackSearch = useCallback(
        debounce((value: string) => gtag.search(value), 500),
        [],
    )

    return (
        <Page active="Blog">
            <div className="main">
                <Search placeholder={"Search blog posts"} />
            </div>
        </Page>
    )
}

export default Blog
