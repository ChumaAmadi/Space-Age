import styles from '../styles/Home.module.css'
import  React, { useState } from 'react'
import Image from 'next/image'
import Planet from '../public/planet.png'
import FeatureState from '../components/feature-states'

export default function Features() {
    return (
        <div className={styles.featureContainer}>
            <Image src={Planet} alt=" " layout="fill" quality="100" className={styles.planet} />
            <h1 className={styles.featureTitle}>Game Features</h1>
            <div className={styles.featureLeft}>
                <FeatureState />
            </div>
        </div>
    )
}