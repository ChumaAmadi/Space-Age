import styles from '../styles/Home.module.css'
import Image from 'next/image'
import rocket from '../public/rocket.png'

export default function Rocket() {
  return (
    <div className="rocketClass">
        <Image src={rocket} alt="rocket" className={styles.rocket} />
    </div>
  )
}
