import styles from './accountLayout.module.css';
import AccountIntro from '../components/accountIntro/accountIntro';
import AccountForm from '../components/accountForm/accountForm';
import AccountWarning from '../components/accountWarning/account.warning';
import { AccountModal, RegisterModal } from '/src/components/ui/Modal/Modal.jsx';
import { useState } from 'react';
function AccountLayout() {
    /* Модалка авторизации */
    const [isAuth, setIsAuth] = useState(false);
    // Переключение модалок
    const [isRegister, setIsRegister] = useState(false);
    function onRegister() {
        setIsRegister(true);
    }
    function onLogin() {
        setIsRegister(false);
    }
    return (
        <div className={styles.accountLayout}>
            <div className={styles.accountLayoutContainer}>
                <AccountIntro />
                <AccountWarning />
                {!isAuth && (
                    <AccountModal
                        isOpen={!isAuth && !isRegister}
                        onSuccess={() => setIsAuth(true)}
                        onRegister={onRegister}
                    />
                )}
                {isAuth && <AccountForm />}
                {isRegister && (
                    <RegisterModal
                        isOpen={isRegister}
                        onClose={() => setIsRegister(false)}
                        onLogin={onLogin}
                    />
                )}
            </div>
        </div>
    )
}

export default AccountLayout;