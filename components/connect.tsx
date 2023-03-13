import styles from '../styles/Connect.module.css'
import Instagram from '../public/ig.png'
import Twitter from '../public/box-twitter.png'
import LinkedIn from '../public/linkedin.png'
import Github from '../public/github.png'
import Star from '../public/space-city.png'
import Substack from '../public/substack.png'
import Image from 'next/image'

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
                        <Image src={Substack} alt=" " quality='100' />
                    </div>
                </div>
                
                <div className={styles.socialsContainer}>
                    <div className={styles.instagram}>
                        <Image src={Instagram} alt=" " quality='100' />
                    </div>
                    <div className={styles.twitter}>
                        <Image src={Twitter} alt=" " quality='100' />
                    </div>
                    <div className={styles.linkedin}>
                        <Image src={LinkedIn} alt=" " quality='100' />
                    </div>
                    <div className={styles.github}>
                        <Image src={Github} alt=" " quality='100' />
                    </div>
                </div>

                <div className={styles.alpha}>
                    <h3>Pre-Alpha Signup</h3>
                    <button className={styles.button}>Pre-Alpha</button>
                </div>

                </div>
            </div>
        </div>
    )
}