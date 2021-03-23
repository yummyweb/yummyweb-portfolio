import styles from '../../styles/home/blog.module.scss'

const HomeBlog = (): JSX.Element => {
    return (
        <div className={styles.blog}>
            <div className={styles.post}>
                <h3>Post 1</h3>
                <p>This is my first post on my website.</p>
            </div>
            <div className={styles.post}>
                <h3>Post 2</h3>
                <p>This is my second post on my website.</p>
            </div>
            <div className={styles.post}>
                <h3>Post 3</h3>
                <p>This is my third post, ig on my website.</p>
            </div>
        </div>
    )
}

export default HomeBlog
