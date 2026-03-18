import styles from './Anarchyrules.module.css';
import { useState } from 'react';
function RulesAnarchy () {
    const [rules, setRules] = useState(null)

    function toggleRules(id) {
        setRules(prev => (prev === id ? null : id));
    }
    return (
        <div>
            <section className={styles.rules}>
                <div className={styles.rulesContainer}>
                    <h1 className={styles.rulesMainTitle}>Правила <span className={styles.rulesMainTitleSpan}>Анархии</span></h1>
                    <h2 className={`${styles.rulesTitle} ${styles.fadeIn}`} onClick={() => toggleRules('payment')}>Правила оплаты</h2>
                    {rules === 'payment' && (
                        <ul className={styles.rulesList}>
                            <li className={styles.rulesItem}>В разработке</li>
                           
                        </ul>
                    )}
                   
                    <h2 className={`${styles.rulesTitle} ${styles.fadeIn}`} onClick={() => toggleRules('game')}>Правила игры</h2>
                    {rules === 'game' && (
                        <ul className={styles.rulesList}>
                       <li className={styles.rulesItem}>В разработке</li>
                    </ul>
                    )}
                    <h2 className={`${styles.rulesTitle} ${styles.fadeIn}`} onClick={() => toggleRules('chat')}>Правила чата</h2>
                    {rules === 'chat' && (
                        <ul className={styles.rulesList}>
                        <li className={styles.rulesItem}>В разработке</li>
                     
                    </ul>
                        )}
                        <h2 className={`${styles.rulesTitle} ${styles.fadeIn}`} onClick={() => toggleRules('moderation')}>Правила модерации</h2>
                    {rules === 'moderation' && (
                        <ul className={styles.rulesList}>
                       <li className={styles.rulesItem}>В разработке</li>
                    </ul>
                    )}
                </div>
            </section>
        </div>
    )
}

export default RulesAnarchy;