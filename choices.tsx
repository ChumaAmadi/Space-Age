import styles from '../styles/Home.module.css'

export default function Choices() {
  return (
    <div>
        <video autoPlay muted loop className={styles.video}>         
            <source src="/star.mp4" type="video/mp4"/>       
        </video>
        <h3 className={styles.choicesText}>What Do You Mean "My Choices Matter"?</h3>
    </div>
  )
}