import styles from '../styles/Footer.module.css'

export default function Footer() {
    return (
        <div className={styles.mainContainer}>
            <h3 className={styles.footerText}>Enter The Stars</h3>
            <div className={styles.footerContainer}>
                <button className={styles.footerButton}>Discord</button>
                <button className={styles.footerButton}>Twitter</button>
                <button className={styles.footerButton}>Magic Eden</button>
            </div>
        </div>
    )
} 