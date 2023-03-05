/* eslint-disable react/no-unescaped-entities */
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
                    <p className={styles.teamText1}>Founder & Lead Developer</p>
                    <p className={styles.teamText1}>Hello! I am Chukwuma & I am currently the heart and soul behind Space Age.</p>
                    <p className={styles.teamText1}>I am 23 years of age, I am am going to graduate from the University of Massachusetts Boston this spring with a Bachelor's of Science in Information Technology.</p>
                    <p className={styles.teamText1}>My dream is to become a full-stack developer and advance the uses of blockchain and web3 technology..</p>
                    <p className={styles.teamText1}>I have been programming off & on since 2016. Web3 has truly manifested my love for programming and I am forever grateful for this.</p>
                </div>
                <div className={styles.teamPicture}>
                    <Image src={Chuma} alt=" " layout="fill" className={styles.chuma} />
                    <h3 className={styles.teamText2}>Chukwuma Nnodim-Amadi</h3>
                </div>
                <div className={styles.teamTextBox2}>
                    <Image src={Ship} alt=" " layout="fill" className={styles.ship} />
                    <p className={styles.teamText3}>The overall goal of Space Age is to provide a simple, yet captivating game for all to enjoy</p>
                    <p className={styles.teamText3}>Also, to cultivate a community of like-minded individuals who are passionate about web3 technology and want to see Space Age flourish.</p>
                    <p className={styles.teamText3}>Innovation and creativity will be implemented on unseen scales while players earn Solana by actively playing as their role.</p>
                </div>
                
            </div>
        </div>
    )
}