import styles from '../styles/Home.module.css'
import Image from 'next/image'
import pirate from '../public/pirate.png'
import merchant from '../public/merchant.png'
import explorer from '../public/rocket-icon.jpg'


export default function IconSlideshow() {
  return (
    <div className={styles.slideshowContainer}>
        <Image src={pirate} alt="pirate" width={100} height={100} className={styles.myslidesHidden} />
        <Image src={merchant} alt="merchant" width={100} height={100} className={styles.myslidesHidden} />
        <Image src={explorer} alt="explorer" width={100} height={100} className={styles.myslidesHidden} />
    </div>
  )
}