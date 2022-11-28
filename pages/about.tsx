import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import pirate from '../public/pirate.png'
import merchant from '../public/merchant.png'
import explorer from '../public/space.png'

export default function About() {
  return (
    <div>
      <video autoPlay muted loop className={styles.video}>         
        <source src="/star.mp4" type="video/mp4"/>       
      </video>
      <h3 className={styles.question}>What Is Space Age?</h3>
      <div className={styles.aboutContainer}>
        <Image src={pirate} alt="Pirate" className={styles.pirate} /> 
        <p className={styles.aboutText}>
          In Space Age, your choices truly matter.
        </p>
        <Image src={merchant} alt="Merchant" className={styles.merchant} />
        <p className={styles.aboutText1}>
          You can choose to be a merchant, pirate, or an explorer.
        </p>
        <Image src={explorer} alt="Explorer" className={styles.explorer} />
        <p className={styles.aboutText2}>
          Decide your path & create your own story.
        </p>
      </div>
    </div>
  )
}  