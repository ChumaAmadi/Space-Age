import styles from '../styles/Home.module.css'
import Image from 'next/image'
import rocket from '../public/rocket.png'
import Link from 'next/link'

export default function Rocket() {
  return (
    <div className={styles.rocketContainer}>
      <Link href='/about'><Image src={rocket} alt="rocket" className={styles.rocket} /></Link>
    </div>
  )
}
