import type { BlogPosts } from '../pages/blog'
import styles from '../styles/post-list.module.scss'

interface IProps {
    posts: BlogPosts
}

const PostList = ({ posts }: IProps): JSX.Element => {
    return (
        <ul className={styles.posts}>

        </ul>
    )
}

export default PostList
