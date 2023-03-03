import styles from '../styles/Team.module.css'

export default function Team() {
    return (
        <div>
            <div className={styles.teamContainer}>
                <video autoPlay muted loop className={styles.video}>         
                    <source src="/star.mp4" type="video/mp4"/>       
                </video>
                <h1 className={styles.teamText}>Meet The Team!</h1>

                <div className={styles.teamTextBox}>
                    {/* Image */}
                    <p className={styles.teamText1}>...</p>
                </div>
                <div className={styles.teamPicture}>
                    {/* Image */}
                    <h3 className={styles.teamText2}>...</h3>
                </div>
                <div className={styles.teamTextBox2}>
                    {/* Image */}
                    <p className={styles.teamText2}>...</p>
                </div>
                
            </div>
        </div>
    )
}