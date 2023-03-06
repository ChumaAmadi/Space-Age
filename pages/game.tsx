import styles from '../styles/Game.module.css'
import React from "react";
import GameWindow from './game-window';

export default function Game() {
    return (
        <div className={styles.mainGameContainer}>
            <GameWindow />
        </div>
    )
}