import Footer from '../components/footer'
import Header from '../components/header'
import HomeBlog from '../components/home/blog'
import NowPlaying from '../components/now-playing'
import Transition from '../components/transition'
import styles from '../styles/index.module.scss'

const Home = (): JSX.Element => {
  return (
    <>
      <div className={styles.container}>
        <Header active="Home" />
        <Transition>
          <div className={styles.main}>
            <h1><span className={styles.wave}>👋</span> Hi, my name is yum.</h1>
            <p className={styles.description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate odit animi quisquam, ipsam deserunt veritatis eligendi? Accusantium quos aut minus?</p>
            <hr/>
            <div className={styles.blogPosts}>
              <h2>Check out my latest posts</h2>
              <div>
                <HomeBlog />
              </div>
            </div>
            <NowPlaying />
          </div>
        </Transition>
        <Footer />
      </div>
    </>
  )
}

export default Home