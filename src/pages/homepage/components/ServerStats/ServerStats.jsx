import styles from './serverstats.module.css';
import { useCopy } from '/src/API/useFetch';
function ServerStats() {
  const { btnText, handleCopy } = useCopy();
  return (
    <section className={styles.serverStats}>
      <div className={styles.serverStatsContainer}>
        <div className={styles.serverStatsMainRow}>
          <div className={styles.serverStatsIp}>
            <p className={styles.serverStatsIpLabel}>Адрес сервера</p>
            <p className={styles.serverStatsIpValue}>FastCraft.me:19132</p>
          </div>
          <button type="button" className={styles.copyButton} onClick={handleCopy}>
            {btnText}
          </button>
        </div>

        <div className={styles.serverStatsGrid}>
          <div className={styles.serverStatsCard}>
            <p className={styles.serverStatsCardValue}>80</p>
            <p className={styles.serverStatsCardLabel}>Игроков онлайн</p>
          </div>
          <div className={styles.serverStatsCard}>
            <p className={styles.serverStatsCardValue}>1.1 - 1.26+</p>
            <p className={styles.serverStatsCardLabel}>Версия сервера</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServerStats;