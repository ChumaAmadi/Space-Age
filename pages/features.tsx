/* eslint-disable react/no-unescaped-entities */
import styles from '../styles/Features.module.css'
import React from 'react'
import Image from 'next/image'
import Planet from '../public/planet.jpg'
import Coin from '../public/coin.gif'
import Universe from '../public/universe.gif'
import Rocket from '../public/rship.gif'
import Solana from '../public/sol.gif'

export default function Features() {
    return (
        <div>
            <div className={styles.teamTitle}>
                <h1>Game Features</h1>
            </div>
            <div className={styles.mainContainer}>
                <Image src={Planet} alt=" " layout="fill" quality="100" className={styles.planet} />
                <div className={styles.featureContainer}>
                    <div className={styles.feature}>
                        <h3>Meaningful Roles</h3>
                        <div className={styles.featureImage}>
                            <Image src={Rocket} alt=" " layout="fill" quality="100" />
                        </div>
                        <p>
                            Gameplay mechanics that create a sense of purpose and importance for each player's role within a team or group.
                            Each player's actions and decisions have an impact on the universe. Gameplay mechanics are designed to encourage
                            players to collaborate and work together in order to expand the thrive & universe.     
                        </p>
                    </div>
                    <div className={styles.feature2}>
                        <h3>Earn Rewards</h3>
                        <div className={styles.featureImage2}>
                            <Image src={Solana} alt=" " layout="fill" quality="100" />
                        </div>
                        <p>
                            Players can earn rewards by completing missions, quests, and challenges. Rewards can be used to purchase items
                            needed to continue through the Veridian Cluster. Various roles require various items to complete their tasks.
                        </p>
                    </div>
                    <div className={styles.feature3}>
                        <h3>Bustling Universe</h3>
                        <div className={styles.featureImage3}>                        
                            <Image src={Universe} alt=" " layout="fill" quality="100" />
                        </div>
                        <p>
                            The Veridian Cluster is a vast universe with many planets, moons, and stars. Each planet has its own unique features,
                            inhabitants, and challenges. Players will also be forced into strange and dangerous situations that will test their skills and abilities, so be prepared!
                        </p>
                    </div>
                    <div className={styles.feature4}>
                        <h3>Markets</h3>
                        <div className={styles.featureImage4}>
                            <Image src={Coin} alt=" " layout="fill" quality="100" />
                        </div>
                        <p>
                            The market is a place where players can buy and sell items through the use of Solana. Markets can be discovered on many planets and moons throughout the Veridian Cluster.
                            Rumor has it: the remaining explorers from the Eon wars are planning to rebuild the Grand Exchange on Solania...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}