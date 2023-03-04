import styles from '../styles/Team.module.css'
import Image from 'next/image'
import Astro from '../public/astro.png'
import Chuma from '../public/chuma.jpg'
import Ship from '../public/ship.png'

export default function Team() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.teamContainer}>
                <video autoPlay muted loop className={styles.video}>         
                    <source src="/s.mp4" type="video/mp4"/>       
                </video>
                <h1 className={styles.teamText}>Meet The Team!</h1>

                <div className={styles.teamTextBox}>
                    <Image src={Astro} alt=" " layout="fill" className={styles.astro} />
                    <p className={styles.teamText1}>...</p>
                </div>

                <div className={styles.teamPicture}>
                    <Image src={Chuma} alt=" " width={300} height={300} className={styles.chuma} />
                    <h3 className={styles.teamText2}>...</h3>
                </div>
                <div className={styles.teamTextBox2}>
                    <Image src={Ship} alt=" " className={styles.ship} />
                    <p className={styles.teamText2}>...</p>
                </div>
                
            </div>
        </div>
    )
}