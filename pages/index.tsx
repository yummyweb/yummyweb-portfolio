import NowPlaying from '../components/now-playing'
import Page from '../components/page'
import styles from '../styles/index.module.scss'
import { getFiles } from '../lib/mdx'

interface IProps {
  posts: string[]
}

const Home = ({ posts }: IProps): JSX.Element => {
  console.log(posts[0].split('.')[0])

  return (
    <Page active="Home">
        <div className="main">
          <h1><span className={styles.wave}>👋</span> Hi, my name is yum.</h1>
          <p className={styles.description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate odit animi quisquam, ipsam deserunt veritatis eligendi? Accusantium quos aut minus?</p>
          <hr />
          <div className={styles.blogPosts}>
            <h2>Check out my latest posts</h2>
            <div className={styles.blog}>
              <div className={styles.post}>
                <h3>{ posts[0].split('.')[0] }</h3>
              </div>
            </div>
          </div>
          <NowPlaying />
        </div>
    </Page>
  )
}

export async function getStaticProps({ params }) {
  const posts = await getFiles('blog')

  return { props: { posts } }
}

export default Home