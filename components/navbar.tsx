import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/spaceagetrans.png'
import { useState, useEffect } from 'react';

{/* Navbar */}
const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 0;
        if (isScrolled !== scrolled) {
          setScrolled(isScrolled);
        }
      };
  
      document.addEventListener('scroll', handleScroll);
  
      return () => {
        document.removeEventListener('scroll', handleScroll);
      };
    }, [scrolled]);
  
    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.leftContent}>
                <div className={styles.logo}>
                <Link href="/"><Image src={logo} alt="" /></Link>
                </div>
                <h3 className={styles.navbarText}>Space Age</h3>
            </div>
            <div className={styles.rightContent}>
                <Link href="/" passHref legacyBehavior><a className={styles.navbarText1}>Home</a></Link>
                <Link href="whitepaper" passHref legacyBehavior><a className={styles.navbarText2}>Whitepaper</a></Link>
                <Link href="faq" passHref legacyBehavior><a className={styles.navbarText3}>FAQ</a></Link>
                <Link href="login" passHref legacyBehavior><a className={styles.navbarText4}>Login</a></Link>
                <Link href="game" passHref legacyBehavior><a className={styles.navbarText5}>Play Game</a></Link>
            </div>
        </nav>
    )
}

export default Navbar