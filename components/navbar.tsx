import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/spaceagetrans.png'

//Navbar Component
export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.leftContent}>
                <div className={styles.logo}>
                <Link href="/"><Image src={logo} alt="" /></Link>
                </div>
                <h3 className={styles.navbarText}>Space-Age</h3>
            </div>
            <div className={styles.rightContent}>
                <button className={styles.navbarButton}>Home</button>
                <button className={styles.navbarButton1}>Whitepaper</button>
                <button className={styles.navbarButton2}>Team</button>
                <button className={styles.navbarButton3}>Select Wallet</button>
                <button className={styles.navbarButton4}>Play Game</button>
            </div>
        </nav>
    )
}