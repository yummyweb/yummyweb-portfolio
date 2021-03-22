import Header from '../components/header'
import styles from '../styles/index.module.scss'

const Home = (): JSX.Element => {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <div className={styles.main}>
          <h1>👋 Hi, my name is yum.</h1>
          <p className={styles.description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate odit animi quisquam, ipsam deserunt veritatis eligendi? Accusantium quos aut minus?</p>
          <button className={styles.button}>More About Me</button>
        </div>
      </div>
    </>
  )
}

export default Home