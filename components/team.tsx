/* eslint-disable react/no-unescaped-entities */
import styles from '../styles/Team.module.css'
import Image from 'next/image'
import Astro from '../public/astro.png'
import Chuma from '../public/chuma.jpg'
import Ship from '../public/ship.jpg'
import Star from '../public/star.jpg'

export default function Team() {
    return (
        <div className={styles.mainContainer}>
            <Image src={Star} alt=" " layout="fill" className={styles.astro} />
            <h1 className={styles.teamTitle}>Meet The Team!</h1>
            <div className={styles.teamContainer}>
                <div className={styles.astroDescription}>
                    <Image src={Ship} alt=" " layout="fill" className={styles.astro} />
                    <p>Hello! I am Chukwuma & I am founder & lead developer of Space Age.</p>
                    <p>I am 23 years of age, I am am going to graduate from the University of Massachusetts Boston this spring with a Bachelor's of Science in Information Technology.</p>
                    <p>My dream is to become a full-stack developer and advance the uses of blockchain and web3 technology.</p>
                    <p>I have been programming off & on since 2016. Web3 has truly manifested my love for programming and I am forever grateful for this.</p>
                </div>
                
                <div className={styles.chumaDescription}>
                    <Image src={Chuma} alt=" " layout="fill" className={styles.chuma} />
                    <h3>Chukwuma Nnodim-Amadi</h3>
                        {/* The overall goal of Space Age is to provide a simple, yet captivating game for all to enjoy
                        Also, to cultivate a community of like-minded individuals who are passionate about web3 technology and want to see Space Age flourish.
                        Innovation and creativity will be implemented on unseen scales while players earn Solana by actively playing as their role.
                        As the universe expands, so will the need for cooperation amongst the different roles. */}
                </div>
            </div>
        </div>
    )   
}