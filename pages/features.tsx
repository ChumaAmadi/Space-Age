import styles from '../styles/Features.module.css'
import React from 'react'
import Image from 'next/image'
import Planet from '../public/planet.png'

export default function Features() {
    return (
        <div className={styles.mainContainer}>
            <Image src={Planet} alt=" " layout="fill" quality="100" className={styles.planet} />
            <h1 className={styles.featureTitle}>Game Features</h1>
            <div className={styles.featureContainer}>

                <div className={styles.feature}>
                    <h3>...</h3>
                    {/* Image 1 */}
                    <p>...</p>
                </div>

                <div className={styles.feature}>
                    <h3>...</h3>
                    {/* Image 2 */}
                    <p>...</p>
                </div>

                <div className={styles.feature}>
                    <h3>...</h3>
                    {/* Image 3 */}
                    <p>...</p>
                </div>

                <div className={styles.feature}>
                    <h3>...</h3>
                    {/* Image 4 */}
                    <p>...</p>
                </div>

            </div>
        </div>
    )
}