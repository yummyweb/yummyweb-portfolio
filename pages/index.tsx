import Header from '../components/header'
import styles from '../styles/Home.module.css'

const Home = (): JSX.Element => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h2>My Site</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet illo, repellendus quae similique eveniet, ipsam reprehenderit corporis quasi unde autem obcaecati, expedita dolorum deserunt. Placeat sunt voluptates exercitationem saepe veritatis culpa maiores at nam distinctio vitae, possimus error eos dolor eius nihil repudiandae doloribus iusto, repellat eaque aliquid animi aperiam!</p>
      </div>
    </>
  )
}

export default Home