import styles from '../styles/Roadmap.module.css'
import Image from 'next/image'
import starChart from '../public/roadmap.png'
import Cosmos from '../public/cosmos.jpg'


{/* Roadmap Container */}
export default function Roadmap() {
  return (
    <div>
      <div className={styles.teamTitle}>
        <h1>Roadmap</h1>
      </div>
      <div className={styles.roadmapContainer}>
        <Image src={Cosmos} alt=" " layout="fill" quality="100" className={styles.cosmos} />
        <div className={styles.roadmapContainer2}>
          <Image src={starChart} alt=" " />
        </div>
      </div>
    </div>
  )
}