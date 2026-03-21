import styles from './accountWarning.module.css';

export function AccountWarning() {
    return (
        <section className={styles.accountWarning}>
            <h2 className={styles.accountWarningTitle}>Внимание!</h2>
            <p className={styles.accountWarningSubtitle}>На этой странице вы можете управлять аккаунтом на сервере.</p>

            <div className={styles.accountWarningContainer}>
                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>Как привязать аккаунт</h3>
                    <ol className={styles.accountWarningList}>
                        <li className={styles.accountWarningItem}>Введите никнейм на сервере.</li>
                        <li className={styles.accountWarningItem}>Нажмите кнопку "Получить код".</li>
                        <li className={styles.accountWarningItem}>Дождитесь кода подтверждения в игре.</li>
                        <li className={styles.accountWarningItem}>Введите полученный код в форму.</li>
                        <li className={styles.accountWarningItem}>Нажмите кнопку "Привязать аккаунт".</li>
                    </ol>
                </div>

                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>Смена пароля</h3>
                    <ul className={styles.changePassList}>
                        <li className={styles.changePassItem}>Введите новый пароль.</li>
                        <li className={styles.changePassItem}>Подтвердите новый пароль.</li>
                        <li className={styles.changePassItem}>Нажмите кнопку "Сменить пароль".</li>
                    </ul>
                </div>

                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>Отвязка аккаунта</h3>
                    <ul className={styles.unlinkAccountList}>
                        <li className={styles.unlinkAccountItem}>Введите код подтверждения отвязки.</li>
                        <li className={styles.unlinkAccountItem}>Нажмите кнопку "Отвязать аккаунт".</li>
                        <li className={styles.unlinkAccountItem}>После подтверждения аккаунт будет отвязан.</li>
                    </ul>
                </div>

                <div className={styles.important}>
                    <h4 className={styles.importantTitle}>Важно</h4>
                    <p>Можно привязать максимум 3 аккаунта на сервере.</p>
                    <p>При превышении лимита сначала отвяжите один из аккаунтов.</p>
                    <p>Если забыли пароль от сайта, восстановление может быть недоступно.</p>
                </div>
            </div>
        </section>
    )
}

export default AccountWarning;