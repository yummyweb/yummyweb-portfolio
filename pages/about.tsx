import Header from '../components/header'
import styles from '../styles/about.module.scss'
import Image from 'next/image'
import Transition from '../components/transition'

const About = (): JSX.Element => {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <Transition>
          <div className={styles.main}>
            <div className={styles.logoContainer}>
              <Image className={styles.logo} width="100" height="100" alt="Yum" src="/yum_logo.png" />
            </div>
            <h1 className={styles.name}><span className={styles.hangLoose}>🤙</span> Yo, I'm yum.</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime asperiores, aliquid consequatur cum quos ducimus voluptatibus tenetur neque est inventore alias, praesentium ex, deleniti sunt reiciendis eius placeat itaque ipsa recusandae omnis nobis quod.
            </p>
            <p>
                <a href="/" className="link"><span data-content="Lorem ipsum" className="dotted">Lorem ipsum</span></a> dolor sit amet consectetur, adipisicing elit. Quod, <a className="link" href="/"><span className="dotted" data-content="necessitatibus?">necessitatibus?</span></a>
            </p>
          </div>
        </Transition>
      </div>
    </>
  )
}

export default About