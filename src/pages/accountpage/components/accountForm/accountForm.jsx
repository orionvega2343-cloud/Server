import styles from './accountForm.module.css';

function AccountForm() {
    return (
        <form className={styles.accountForm}>
            <div className={styles.accountFormContainer}>
                <h2 className={styles.accountFormTitle}>Управление аккаунтом</h2>
                <section className={styles.accountFormCard}>
                    <div className={styles.accountFormItem}>
                        <label className={styles.accountFormItemLabel} htmlFor="nickname">Привязать аккаунт</label>
                        <input
                            id="nickname"
                            name="nickname"
                            type="text"
                            className={styles.accountFormItemInput}
                            placeholder="Введите никнейм"
                            required
                            minLength={3}
                            maxLength={16}
                            pattern="[A-Za-z0-9_]{3,16}"
                            title="Введите ник в формате: 3-16 символов, только латинские буквы, цифры и _"
                        />
                    </div>
                    <div className={styles.accountFormItem}>
                        <label className={styles.accountFormItemLabel} htmlFor="confirmCode">Подтверждение привязки</label>
                        <input
                            id="confirmCode"
                            name="confirmCode"
                            type="text"
                            className={styles.accountFormItemInput}
                            placeholder="Введите код"
                            required
                        />
                    </div>
                    <div className={styles.accountFormItem}>
                        <div className={styles.accountFormActionRow}>
                            <button type="button" className={styles.accountFormItemButton}>Получить код</button>
                            <button type="submit" className={styles.accountFormItemButton}>Привязать аккаунт</button>
                        </div>
                    </div>
                </section>

                <section className={styles.accountFormCard}>
                    <div className={styles.accountFormItem}>
                        <label className={styles.accountFormItemLabel} htmlFor="newPassword">Введите новый пароль</label>
                        <input
                            id="newPassword"
                            name="newPassword"
                            type="password"
                            placeholder="Введите новый пароль"
                            className={styles.accountFormItemInput}
                        />
                    </div>
                    <div className={styles.accountFormItem}>
                        <label className={styles.accountFormItemLabel} htmlFor="confirmNewPassword">Подтвердите новый пароль</label>
                        <input
                            id="confirmNewPassword"
                            name="confirmNewPassword"
                            type="password"
                            placeholder="Подтвердите новый пароль"
                            className={styles.accountFormItemInput}
                        />
                    </div>
                    <div className={styles.accountFormItem}>
                        <button type="button" className={styles.accountFormItemButton}>Сменить пароль</button>
                    </div>
                </section>

                <section className={styles.accountFormCard}>
                    <div className={styles.accountFormItem}>
                        <label className={styles.accountFormItemLabel} htmlFor="unlinkCode">Отвязка аккаунта</label>
                        <input
                            id="unlinkCode"
                            name="unlinkCode"
                            type="text"
                            className={styles.accountFormItemInput}
                            placeholder="Введите никнейм"
                        />
                    </div>
                    <div className={styles.accountFormItem}>
                        <button type="button" className={styles.accountFormItemButton}>Отвязать аккаунт</button>
                    </div>
                </section>

                <div className={styles.accountFormItems}>
                    <button type="button" className={styles.accountFormItemButton}>Выгнать аккаунт</button>
                    <button type="button" className={styles.accountFormItemButton}>Заблокировать на 5 минут</button>
                </div>

            </div>
        </form>
    )
}

export default AccountForm