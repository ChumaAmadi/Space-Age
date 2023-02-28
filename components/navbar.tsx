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
                <h3 className={styles.navbarText1}>Home</h3>
                <h3 className={styles.navbarText2}>Whitepaper</h3>
                <h3 className={styles.navbarText3}>Team</h3>
                <h3 className={styles.navbarText4}>Select Wallet</h3>
                <h3 className={styles.navbarText5}>Play Game</h3>
            </div>
        </nav>
    )
}