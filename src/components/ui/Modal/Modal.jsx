import styles from './Modal.module.css';
import crossIcon from '/src/assets/free-icon-close-8001491.png';
import mocks from '/src/mocks/mocks.js';
import { useState } from 'react';

function Modal({ isOpen, onClose, selectedItem, errorName, errorPromocode, handleSubmit }) {
    return (
        <section className={styles.modal}>
            <div className={styles.overlay} onClick={onClose}></div>
            <div className={styles.modalContainer}>
                <h2 className={styles.modalTitle}>Покупка: {selectedItem}</h2>
                <div className={styles.closeBtn} onClick={onClose}>
                    <img src={crossIcon} alt="close" />
                </div>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input type="text" placeholder='Никнейм' required  name='name'/>
                    {errorName && (
                      <p className={styles.errorName}>Никнейм должен быть от 3 до 20 символов</p>
                    )}
                    <input type="text" placeholder='Промокод' name='promocode' />
                    {errorPromocode && (
                      <p className={styles.errorPromocode}>Промокод неверный</p>
                    )}
                    <p className={styles.agreeRow}>
                      <input type="checkbox" required />
                      <span>
                        Я согласен с <a href="#">правилами оплаты</a> и понимаю последствия
                      </span>
                    </p>
                    <button type="submit" className={styles.buyBtn}>Купить</button>
                </form>
            </div>
        </section>
    )
}


export function PlayModal ({isOpen, onClose}) {
  if (!isOpen) return null;

  return (
    <section className={styles.playModal}>
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={styles.playModalContainer}>
        <header className={styles.playModalTop}>
          <h2 className={styles.playModalTitle}>Как начать играть</h2>
          <button type="button" className={styles.playModalClose} onClick={onClose}>
            <img src={crossIcon} alt="close" />
          </button>
        </header>

        <div className={styles.playModalContent}>
          <ol className={styles.playSteps}>
            <li className={styles.playStep}>
              <div className={styles.stepBadge}>1</div>
              <div className={styles.stepBody}>
                <p className={styles.stepTitle}>Открываем Minecraft</p>
              </div>
            </li>

            <li className={styles.playStep}>
              <div className={styles.stepBadge}>2</div>
              <div className={styles.stepBody}>
                <p className={styles.stepTitle}>Переходим во вкладку «Сервера»</p>
              </div>
            </li>

            <li className={styles.playStep}>
              <div className={styles.stepBadge}>3</div>
              <div className={styles.stepBody}>
                <p className={styles.stepTitle}>
                  Нажимаем «Добавить сервер», вводим айпи: FastCraft.me, порт: 19132, нажимаем «Добавить»
                </p>
              </div>
            </li>

            <li className={styles.playStep}>
              <div className={styles.stepBadge}>4</div>
              <div className={styles.stepBody}>
                <p className={styles.stepTitle}>Приятной игры!</p>
              </div>
            </li>
          </ol>
        </div>

        <button type="button" className={styles.playBtn} onClick={onClose}>
          Уже захожу!
        </button>
      </div>
    </section>
  )
}


export function AccountModal({ isOpen, onClose, onSuccess, onRegister }) {
  const player = mocks[0];
  const nickName = player.name;
  const password = player.password;

  const [nameValue, setNameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [showError, setShowError] = useState(false);

  if (!isOpen) return null;

  function handleSubmit(e) {
    e.preventDefault();

    const isValidName = nameValue === nickName;
    const isValidPassword = passwordValue === password;

    if (isValidName && isValidPassword) {
      setShowError(false);
      onSuccess?.();
      return;
    }

    setShowError(true);
  }

  return (
    <section className={styles.accountModal}>
      <div className={styles.accountModalOverlay} onClick={onClose}></div>
      <div className={styles.accountModalContainer}>
        <h2 className={styles.accountModalTitle}>Войти в аккаунт</h2>
        <form className={styles.accountModalForm} onSubmit={handleSubmit}>
          <label htmlFor="name" className={styles.accountModalLabel}>Никнейм</label>
          <input
            type="text"
            placeholder="Никнейм"
            value={nameValue}
            onChange={(e) => setNameValue(e.target.value)}
            required
          />
          <label htmlFor="password" className={styles.accountModalLabel}>Пароль</label>
          <input
            type="password"
            placeholder="Password"
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            required
          />
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onRegister?.();
            }}
          >
            Нету аккаунта? Зарегистрироваться
          </a>
          {showError && (
            <p className={styles.accountModalError}>Неверный никнейм или пароль</p>
          )}
          <button type="submit" className={styles.accountModalButton}>Войти</button>
        </form>
      </div>
    </section>
  );
}


export function RegisterModal({ isOpen, onClose, onLogin }) {
  if (!isOpen) return null;

  const [passwordValue, setPasswordValue] = useState('');
  const [confirmPasswordValue, setConfirmPasswordValue] = useState('');
  const [showError, setShowError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (passwordValue !== confirmPasswordValue) {
      setShowError(true);
      return
    }
    setShowError(false);
  }

  return (
    <section className={styles.registerModal}>
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={styles.registerModalContainer}>
        <h2 className={styles.registerModalTitle}>Регистрация</h2>
        <form className={styles.registerModalForm} onSubmit={handleSubmit}>
          <label htmlFor="name" className={styles.registerModalLabel}>Никнейм</label>
          <input type="text" placeholder="Никнейм" required />
          <label htmlFor="password" className={styles.registerModalLabel}>Пароль</label>
          <input type="password" placeholder="Пароль" required value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)} />
          <label htmlFor="confirmPassword" className={styles.registerModalLabel}>Подтвердите пароль</label>
          <input type="password" placeholder="Подтвердите пароль" required value={confirmPasswordValue} onChange={(e) => setConfirmPasswordValue(e.target.value)} />
          <p>
            Уже есть аккаунт?{' '}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onLogin?.();
              }}
            >
              Войти
            </a>
          </p>
          {showError && (
            <p className={styles.registerModalError}>Пароли не совпадают</p>
          )}
          <button type="submit" className={styles.registerModalButton}>Зарегистрироваться</button>
        </form>
      </div>
    </section>
  )
}
export default Modal;