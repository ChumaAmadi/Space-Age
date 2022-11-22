import styles from '../styles/Home.module.css'
import Image from 'next/image'
import pirate from '../public/pirate.png'
import merchant from '../public/merchant.png'
import explorer from '../public/rocket-icon.jpg'


export default function IconSlideshow() {
  return (
    <div className={styles.slideshowContainer}>
      <div className={styles.mySlidesHidden}>
          <Image src={pirate} alt="pirate" width={100} height={100} />
          <Image src={merchant} alt="merchant" width={100} height={100} />
          <Image src={explorer} alt="explorer" width={100} height={100} />
      </div>
    </div>
  )
}