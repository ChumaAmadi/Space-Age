import styles from '../styles/Home.module.css'

{/* Space */}
export default function Space() {
    return (
        <video autoPlay muted loop className={styles.video}>         
            <source src="/star.mp4" type="video/mp4"/>       
        </video>
    )
}