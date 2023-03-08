import styles from '../styles/Roadmap.module.css'
import Image from 'next/image'
import starChart from '../public/roadmap.png'
import Cosmos from '../public/cosmos.jpg'


{/* Roadmap Container */}
export default function Roadmap() {
  return (
    <div className={styles.roadmapContainer}>
      <Image src={Cosmos} alt=" " layout="fill" quality="100" className={styles.cosmos} />
      <h1 className={styles.roadmapText}>Roadmap</h1>
      <div className={styles.roadmapContainer2}>
        <Image src={starChart} alt=" " />
      </div>
    </div>
  )
}