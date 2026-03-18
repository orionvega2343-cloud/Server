import styles from './footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerText}>
          <div className={styles.footerLogo}> FC</div>
          <div className={styles.footerDescription}>Лучший майнкрафт сервер в России!</div>
        </div>
        <div className={styles.footerLinksContainer}>
          <div className={styles.footerLinks}>
            <div className={styles.footerLinksHeader}>Общее</div>
            <div className={styles.footerLinksItems}>
              <a href="#about-section" className={styles.footerLink}>О нас</a>
              <a href="#donate-section" className={styles.footerLink}>Магазин</a>
              <a href="#" className={styles.footerLink}>Описание доната</a>
            </div>
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.footerLinksHeader}>Поддержка</div>
            <div className={styles.footerLinksItems}>
              <a href="#" className={styles.footerLink}>Правила</a>
              <a href="#" className={styles.footerLink}>Контакты</a>
              <a href="#" className={styles.footerLink}>Начать играть</a>
            </div>
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.footerLinksHeader}>Другое</div>
            <div className={styles.footerLinksItems}>
              <a href="#" className={styles.footerLink}>Вконтакте</a>
              <a href="#" className={styles.footerLink}>Телеграм</a>
              <a href="#" className={styles.footerLink}>Личный кабинет</a>
            </div>
          </div>
        </div>
      </div>
      <small className={styles.footerCopyright}>
        © FastCraft 2026 - Не относится  к Mojang AB
        <br />
        Все права защищены!
      </small>
    </footer>
  );
}

export default Footer;
