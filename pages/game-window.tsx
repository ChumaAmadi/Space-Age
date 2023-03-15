import styles from '../styles/Game.module.css'
import React, { useState } from "react";
import Navbar from '../components/navbar';
import Image from 'next/image';
import Lumis from '../public/lumis.png';

function GameWindow() {
  const [currentPrompt, setCurrentPrompt] = useState("You have arrived on Lumis IV. What do you want to do?");
  const [options, setOptions] = useState([
    { text: "Explore the planet", nextPrompt: "You discover a hidden cave. Do you enter it?" },
    { text: "Research Lumis IV in solanadex", nextPrompt: "Lumis IV is rocky planet with many unexplored & dangerous caverns hiding beaneath the surface. Large mountain peaks protrude through the gold sky. Mountianous terrains threaten the integrity of most ships in the Veridian Cluster. Lumis IV has no moons, 22% of it's surface is covered by water, and the climate never gets above  80.7 °F, The gravity on Lumis IV is slightly lighter than that on earth and the days last over 21 hours. There is plenty to be seen on Lumis IV, just make sure you are inside or bearing arms when the sun goes down. Do you want to explore the planet?" },
    { text: "Leave", nextPrompt: "Where do you want to go?" },
  ]);
  const [gameOver, setGameOver] = useState(false);

  function handleOptionClick(nextPrompt: React.SetStateAction<string>) {
    setCurrentPrompt(nextPrompt);
    // you would add more logic here to determine what happens based on the player's choice
  }

  return (
    <div>
      <Navbar />
      <div className={styles.gameWindow}>
        <Image src={Lumis} alt=" " layout="fill" quality="100" className={styles.planet} />
        <div className={styles.gameContainer}>
          <h1>{currentPrompt}</h1>
          {options.map((option, index) => (
            <button key={index} onClick={() => handleOptionClick(option.nextPrompt)}>
              {option.text}
            </button>
          ))}
          {gameOver && <h2>Game Over</h2>}
        </div>
      </div>
    </div>
  );
}

export default GameWindow;