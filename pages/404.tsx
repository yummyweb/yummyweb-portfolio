import Header from '../components/header'
import styles from '../styles/custom404.module.scss'
import Head from 'next/head'

const Custom404 = (): JSX.Element => {
  return (
    <>
        <Head>
            <title>Page Not Found | Yum</title>
        </Head>
      <div className={styles.container}>
        <Header active="Home" />
        <div className={styles.main}>
          <div className={styles.titleContainer}>
            <h1 data-text="404" className={styles.title}>404</h1>
          </div>
          <h1 className={styles.description}>You couldn't find this page but you did find an alien 👽.</h1>
        </div>
      </div>
    </>
  )
}

export default Custom404