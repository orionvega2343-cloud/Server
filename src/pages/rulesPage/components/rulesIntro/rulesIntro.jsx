import styles from './rulesIntro.module.css';

function Intro () {
    return (
        <div>
            <section className={styles.rulesIntro}>
                <h2 className={styles.rulesIntroTitle}>Правила  <span className={styles.rulesCol}>проекта:</span></h2>
                <p className={styles.rulesIntroText}>
                    Нарушение правил может привести к блокировке аккаунта,чата,удалению баланса,снятию доната и т.д.
                </p>
            </section>
        </div>
    )
}

export default Intro;