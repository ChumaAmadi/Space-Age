import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <div>
        <h3 className={styles.whatIs}>What Is Space Age?</h3>
        <div className={styles.aboutContainer}>
            <p className={styles.aboutText}>
                Space Age is click-based game where your choices matter & follow you through the stars
            </p>
            <p className={styles.aboutText1}>
                You can choose to be a merchant, pirate, or an explorer(More Coming Soon)
            </p>
            <p className={styles.aboutText2}>
                Decide your path & create your own story
            </p>
        <h3 className={styles.rulesOverview}>Rules</h3>
        <p className={styles.rulesText}>Click on any of the icons to read about that aspect of the game</p>
        <div className={styles.rulesContainer}>
        </div>
      </div>
    </div>
  )
}  