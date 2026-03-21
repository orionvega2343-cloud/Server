import styles from './accountIntro.module.css';
import mocks, { rankImageByName } from '/src/mocks/mocks.js';

function AccountIntro() {
    const player = mocks[0];
    const nickName = player.name;
    const rank = player.donate;
    const rankImage = rankImageByName[rank];

    return (
        <section className={styles.accountIntro}>
            <div className={styles.accountIntroContainer}>
                <h1 className={styles.accountIntroTitle}>Личный кабинет: <span className={styles.accountIntroNickName}>{nickName}</span></h1>
                <p className={styles.accountIntroRank}>Привилегия: <span className={styles.accountIntroRankName}>{rank}</span></p>
                <img src={rankImage} alt={rank} className={styles.accountIntroRankImage} />
            </div>
        </section>
    );
}


export default AccountIntro;

