import styles from './Modal.module.css';
import crossIcon from '/src/assets/free-icon-close-8001491.png';

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

export default Modal;