import styles from '../styles/about.module.scss'
import Image from 'next/image'
import Page from '../components/page'

const About = (): JSX.Element => {
  return (
    <Page active="About">
      <div className={styles.main}>
        <div className={styles.logoContainer}>
          <Image className={styles.logo} width="100" height="100" alt="Yum" src="/" />
        </div>
        <h1 className={styles.name}>Antariksh Verma</h1>
        <p>
          I am currently a first-year engineering student at The Hong University of Science and Technology in New Territories, Hong Kong. Previously, I completed my high school graduation from Pathways School Gurgaon in India. I am passionated about computer science and startups.
        </p>
        <br />
        <p>
          My relevant coursework includes COMP 2012H, COMP 2711, COMP 4461 and TEMG 4000H.
        </p>
      </div>
    </Page>
  )
}

export default About