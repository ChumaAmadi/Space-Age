import { useState } from 'react';
import styles from '../styles/Questions.module.css';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    'What is Space Age?',
    'How do I play Space Age?',
    'How can I earn solana by playing Space Age?',
    'What kind of resources are in Space Age?',
    'How can I play The Alpha Build?',
    'How can I stay updated on the latest news and developments for Space Age?'
  ];

  const answers = [
    'Space Age is a live-service game where players can explore a virtual universe, collect resources, , compete with & against each other for dominance, and much more all while earning solana.',
    'To play Space Age, you need to create an account, log in, and connect your wallet. Space will stay as a web app for the time being, but we will transition to a full-fledged desktop app with Tauri & Rust in the future.',
    'You earn solana in Space Age by playing as your role. For example, explorers can earn solana by discovering new planets and resources. Merchants can aquire these resources & sell them. Pirates can loot merchants, pillage local markets,  steal resources, and so on. Enforcers get paid for eliminating or arresting pirates as well as protecting civilians across the universe. Players can get paid for completing tasks & missions as well. The possibilities to aquire sol are endless.',
    'Space Age features a variety of resources, including minerals, gases, and other materials that can be used to build structures and fuel your interstellar travels. Weapons will eventually become widely available as tthe need for protection in an expanding universe is very much expected.',
    'You can sign up for the pre-alpha currently, which will be highly limited at launch. Those selected for the pre-alpha will receive special rewards and perks for their participation.',
    'You can follow us on social media or sign up for our newsletter to receive regular updates on Space Age, including release date announcements, gameplay previews, and more.' 
  ];

  const handleClick = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className={styles.container}>
      {questions.map((question, index) => (
        <div key={index} className={styles.question} onClick={() => handleClick(index)}>
          <h3>{question}</h3>
          <span className={styles.arrow}>{index === activeIndex ? '▲' : '▼'}</span>
          <div className={index === activeIndex ? styles.answerActive : styles.answer}>
            <p className={styles.answerText}>{answers[index]}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FAQ;