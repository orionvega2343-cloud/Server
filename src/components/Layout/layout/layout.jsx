import styles from './layout.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
//Общий layout (шапка + контент)
function Layout({children}) {
    return (
        <div className={styles.layout}>
            <header className={styles.header}>
                <Header />
            </header>
            <div className={styles.body}>
                <main className={styles.main}>
                    {children}
                </main>
            </div>
            <footer className={styles.footer}>
                <Footer />
            </footer>
        </div>
    )
}

export default Layout;