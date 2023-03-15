/* eslint-disable react/no-unescaped-entities */
import styles from '../styles/Whitepaper.module.css'
import React from 'react'
import Image from 'next/image'
import Stars from '../public/pretty.jpg'
import Space from '../components/space'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

export default function Whitepaper() {
    return (
        <div>
            <Space />
            <Navbar />
            <div className={styles.mainTitle}>
                <h1>Whitepaper</h1>
            </div>
            <div className={styles.mainContainer}>
                <Image src={Stars} alt=" " layout="fill" quality="100" className={styles.planet} />
                <div className={styles.whitepaperContainer}>
                    <h1>Coming Soon</h1>
                    <p>
                        We're excited to announce that the Space Age whitepaper is 
                        coming in June! Our team has been hard at work designing a 
                        comprehensive and detailed document that outlines the vision 
                        and technical specifications of our project. The whitepaper will 
                        provide an in-depth look into the Space Age ecosystem and it's innovative features. Stay tuned 
                        for more updates and be sure to check out the whitepaper once it is released!
                    </p>
                    <div className={styles.buttonContainer}>
                        <button className={styles.button}>Join The Community</button>
                        <button className={styles.button}>Home</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}