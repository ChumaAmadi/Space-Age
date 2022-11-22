import styles from '../styles/Home.module.css'
import Image from 'next/image'
import pirate from '../public/pirate.png'
import merchant from '../public/merchant.png'
import explorer from '../public/rocket-icon.jpg'

export default function Icons() {
  return (
    <div className={styles.iconContainer}>
      <Image src={pirate} alt="Pirate" className={styles.pirate} /> 
      <Image src={merchant} alt="Merchant" className={styles.merchant} />
      <Image src={explorer} alt="Explorer" className={styles.explorer} />
    </div>
  );
} 