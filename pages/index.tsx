import NowPlaying from '../components/now-playing'
import Page from '../components/page'
import styles from '../styles/index.module.scss'
import { getFiles } from '../lib/mdx'

interface IProps {
  posts: string[]
}

const Home = ({ posts }: IProps): JSX.Element => {
  return (
    <Page active="Home">
      <div className="main">
        <h1><span className={styles.wave}>👋</span> Hi, my name is Antariksh.</h1>
        <p className={styles.description}>Engineering student at The Hong University of Science and Technology. I am interested in blockchain, cryptocurrencies and programming languages.</p>
        <hr />
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