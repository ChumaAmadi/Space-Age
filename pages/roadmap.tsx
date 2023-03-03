import styles from '../styles/Roadmap.module.css'
import Image from 'next/image'
{/* import Roadmap from '../public/roadmap.png' */}

{/* Roadmap Container */}
export default function Roadmap() {
  return (
    <div className={styles.roadmapContainer}>
        <div className={styles.roadmapContainer2}>
            <h1 className={styles.roadmapText}>Roadmap</h1>
            {/* <Image src={Roadmap} alt=" " height={} width={} />  */}
        </div>
    </div>
  )
}