import styles from '../styles/Game.module.css'
import React, { useState } from "react";

function GameWindow() {
  const [currentPrompt, setCurrentPrompt] = useState("Welcome to Space Age. You find yourself on a deserted planet. What do you do?");
  const [options, setOptions] = useState([
    { text: "Explore the planet", nextPrompt: "You discover a hidden cave. Do you enter it?" },
    { text: "Build a shelter", nextPrompt: "You gather materials and build a small shelter. It's getting dark. Do you light a fire?" },
    { text: "Look for resources", nextPrompt: "You find some rocks and plants. Do you try to use them?" },
  ]);
  const [gameOver, setGameOver] = useState(false);

  function handleOptionClick(nextPrompt: React.SetStateAction<string>) {
    setCurrentPrompt(nextPrompt);
    // you would add more logic here to determine what happens based on the player's choice
  }

  return (
    <div className={styles.gameWindow}>
      
      <h1>{currentPrompt}</h1>
      {options.map((option, index) => (
        <button key={index} onClick={() => handleOptionClick(option.nextPrompt)}>
          {option.text}
        </button>
      ))}
      {gameOver && <h2>Game Over</h2>}
    </div>
  );
}

export default GameWindow;