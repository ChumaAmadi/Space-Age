import styles from '../styles/Connect.module.css'
import Instagram from '../public/ig.png'
import Twitter from '../public/box-twitter.png'
import LinkedIn from '../public/linkedin.png'
import Github from '../public/github.png'
import Star from '../public/space-city.png'
import Substack from '../public/substack.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Connect() {
    return (
        <div>
            <div className={styles.textContainer}>
                <h1>Connect With Me!</h1>
            </div>
            <div className={styles.mainContainer}>
                <Image src={Star} alt=" " layout="fill" quality='100' className={styles.star} />
            <div className={styles.mainconnectContainer}>
                
                <div className={styles.connectContainer}>
                    <h3>Dev Blog</h3>
                    <div className={styles.substack}>
                        <a href="https://solspaceage.substack.com/" target="_blank" rel="noreferrer">
                            <Image src={Substack} alt=" " quality='100' />
                        </a>
                    </div>
                </div>
                
                <div className={styles.socialsContainer}>
                    <div className={styles.instagram}>
                        <a href="https://www.instagram.com/ch.v.ma/" target="_blank" rel="noreferrer">
                            <Image src={Instagram} alt=" " quality='100' />
                        </a>
                    </div>
                    <div className={styles.twitter}>
                        <a href="https://twitter.com/ChumaStacks" target="_blank" rel="noreferrer">
                            <Image src={Twitter} alt=" " quality='100' />
                        </a>
                    </div>
                    <div className={styles.linkedin}>
                        <a href="https://www.linkedin.com/in/chukwuma-nnodim-amadi-466589170/" target="_blank" rel="noreferrer">
                            <Image src={LinkedIn} alt=" " quality='100' />
                        </a>
                    </div>
                    <div className={styles.github}>
                        <a href="https://github.com/ChumaAmadi" target="_blank" rel="noreferrer">
                            <Image src={Github} alt=" " quality='100' />
                        </a>
                    </div>
                </div>

                <div className={styles.alpha}>
                    <h3>Pre-Alpha Signup</h3>
                    <Link href="https://solspaceage.substack.com/" passHref legacyBehavior><button className={styles.button}>Pre-Alpha</button></Link>
                </div>

                </div>
            </div>
        </div>
    )
}