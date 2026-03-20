import styles from './donWarning.module.css';

function DonWarning () {
    return (
        <div className={`${styles.donWarning} ${styles.fadeIn}`}>
            <div className={styles.donWarningContainer}>
                <div className={styles.donWarningTitle}>
                    <h3>Внимание: в описании доната могут быть неточности!</h3>
                    <ul className={styles.donWarningList}>
                        <li>1.Любой донат может быть изменен или добавлен в любое время без уведомления.</li>
                        <li>2.Любой донат является добровольным пожертвованием, средства не возвращаются ни при каких обстоятельствах.</li>
                        <li>Приятной игры!</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DonWarning;