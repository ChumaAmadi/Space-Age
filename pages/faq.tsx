import styles from '../styles/Faq.module.css'
import React from 'react'
import Space from '../components/space'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Image from 'next/image'
import Planet from '../public/spaceplanet.jpg'
import FAQ from '../components/questions'

export default function Questions() {
    return (
        <div>
            <Space />
            <Navbar />
            <div className={styles.mainTitle}>
                <h1>Frequently Asked Questions</h1>
            </div>
            <div className={styles.mainContainer}>
                <Image src={Planet} alt=" " layout="fill" quality="100" className={styles.planet} />
                <FAQ />
            </div>
            <Footer />
        </div>
    )
}
