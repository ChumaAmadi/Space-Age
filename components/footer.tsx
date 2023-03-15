import styles from '../styles/Footer.module.css'
import Image from 'next/image'
import Twitter from '../public/twitter.png'
import Discord from '../public/discord.png'
import Magic from '../public/magic-eden.png'
import Solana from '../public/solana.png'
import logo from '../public/spaceagetrans.png'
import Link from 'next/link'

export default function Footer() {
    return (
        <div>
            <div className={styles.mainContainer}>
                <div className={styles.mainFooter}>

                    <div className={styles.footerLeft}>
                        <h3>© 2023 Space Age</h3>
                        <div className={styles.solanaContainer}>
                            <Image src={Solana} alt=" " className={styles.solana} />
                        </div>
                        <p>Built On The Solana Ecosystem</p>
                    </div>

                    <div className={styles.footerCenter}>
                        <div className={styles.logo}>
                            <Link href="/">
                                <Image src={logo} alt=" " className={styles.solana} />
                            </Link>
                        </div>
                    </div>    

                    <div className={styles.footerRight}>
                        <h3>Follow Our Journey!</h3>
                        <div className={styles.socials}>
                            <div className={styles.img1}>
                                <a href="https://twitter.com/space_age_sol" target="_blank" rel="noreferrer">
                                    <Image src={Twitter} alt=" " className={styles.twitter} />
                                </a>
                            </div>
                            <div className={styles.img2}>
                                <a href="https://discord.gg/4Z4Y4Y4" target="_blank" rel="noreferrer"> 
                                    <Image src={Discord} alt=" " className={styles.discord} />
                                </a>
                            </div>
                            <div className={styles.img3}>
                                <a href="https://magiceden.io/" target="_blank" rel="noreferrer">
                                    <Image src={Magic} alt=" " className={styles.magic} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 