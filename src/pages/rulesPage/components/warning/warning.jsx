import styles from './warning.module.css';
function Warning () {
    return (
        <div>
            <section className={styles.warning}>
                <div className={styles.warningContainer}>
                    <h1 className={styles.warningMainTitle}>Внимание!</h1>
                    <ul className={styles.warningList}>
                        <li className={`${styles.warningItem} ${ styles.fadeIn}`}>Играя на нашем сервере вы должны ознакомиться с данным сводом правил</li>
                        <li className={`${styles.warningItem} ${  styles.fadeIn}`}>Правила могут изменяться или оббновляться в будущем</li>
                        <li className={`${styles.warningItem} ${ styles.fadeIn}`}>Администрация не несет ответственности за любые действия игроков, которые нарушают данные правила</li>    
                        <li className={`${styles.warningItem} ${ styles.fadeIn}`}>Администрация не несет ответсвенности за потерянные ресурсы</li>
                        <li className={`${styles.warningItem} ${ styles.fadeIn}`}>Администрация сама выбирает наказание по мере необходимости</li>
                        <li className={`${styles.warningItem} ${ styles.fadeIn}`}>Средства потраченные на пожертвоания серверу не возвращаются не при каких обстоятельствах</li>
                        <li className={`${styles.warningItem} ${ styles.fadeIn}`}>Оттветственность за аккаунт лежит напрямую только на ее владельце</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Warning;