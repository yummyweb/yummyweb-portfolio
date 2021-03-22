import Header from '../components/header'
import styles from '../styles/Home.module.scss'

const Home = (): JSX.Element => {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <div className={styles.main}>
          <h1>👋 Hi, my name is yum.</h1>
        </div>
      </div>
    </>
  )
}

export default Home