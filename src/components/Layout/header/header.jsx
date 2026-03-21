import styles from './header.module.css';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <div className={styles.headerLogo}>FC</div>
                <div className={styles.headerNav}>
                    <Link to="/" className={styles.headerItem}>Донат</Link>
                    <Link to="/rules" className={styles.headerItem}>Правила</Link>
                    <Link to="/donat-description" className={styles.headerItem}>Описание доната</Link>
                    <Link to="/profile" className={styles.headerItem}>Личный кабинет</Link>
                    <p className={styles.headerItem}>Контакты</p>
                </div>
            </div>
        </header>
    )
}

export default Header;