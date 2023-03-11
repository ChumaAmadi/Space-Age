import styles from '../styles/Footer.module.css'
import Image from 'next/image'
import Twitter from '../public/twitter.png'
import Discord from '../public/discord.png'
import Magic from '../public/magic-eden.png'

export default function Footer() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.footerLeftContainer}>
                <h3 className={styles.footerHeader}>Space Age</h3>
                <p className={styles.footerText}>© 2021 Space Age. All Rights Reserved.</p>
                <h3 className={styles.solanaHeader}>Built On The Solana Ecosystem</h3>
            </div>

            <div className={styles.footerRightContainer}>
                <div className={styles.img1}>
                    <Image src={Twitter} alt=" " className={styles.twitter} />
                </div>
                <div className={styles.img2}>
                    <Image src={Discord} alt=" " className={styles.discord} />
                </div>
                <div className={styles.img3}>
                    <Image src={Magic} alt=" " className={styles.magic} />
                </div>
            </div>
        </div>
    )
} 