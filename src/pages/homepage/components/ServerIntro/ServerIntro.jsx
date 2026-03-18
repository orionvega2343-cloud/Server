import styles from './serverintro.module.css';

function ServerIntro () {
    
    return (
        <section className={styles.serverIntro}>
            <div className={styles.serverIntroContainer}>
                <h1 className={styles.serverIntroTitle}>Самый лучший сервер<br></br> Minecraft<br></br> BE</h1>
                <p className={styles.serverIntroDescription}>Единственный сервер,<br></br> который предлагает вам максимальное удовольствие от игры и максимальную безопасность для вашего аккаунта,<br></br>ТОЛЬКО У НАС вы можете приобрести приват прямо на СПАВНЕ</p>
            </div>
        </section>
    )
}


export default ServerIntro;