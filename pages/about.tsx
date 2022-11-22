import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Icons from '../components/icons'

export default function About() {
  return (
    <div>
      <video autoPlay muted loop className={styles.video}>         
        <source src="/star.mp4" type="video/mp4"/>       
      </video>
      <h3 className={styles.question}>What Is Space Age?</h3>
      <div className={styles.aboutContainer}>
        <Icons />
        <p className={styles.aboutText}>
            Space Age is a click-based game where your choices truly matter.
        </p>
        <p className={styles.aboutText1}>
          You can choose to be a merchant, pirate, or an explorer.
        </p>
        <p className={styles.aboutText2}>
          Decide your path & create your own story.
        </p>
      </div>
      <h3 className={styles.rulesOverview}>Rules</h3>
      <p className={styles.rulesText}>Click on any of the icons to read about that aspect of the game</p>
      <div className={styles.rulesContainer}>
      </div>
    </div>
  )
}  