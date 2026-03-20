import styles from './donate.module.css';
import { useState, useReducer } from 'react';
import mocks, { rankImageByName } from '/src/mocks/mocks.js';
import Modal from '/src/components/ui/Modal/Modal';

import head1 from '/src/assets/heads/skin-avatar 8.png';         
import head3 from '/src/assets/heads/skin-avatar 9.png';          
import headAlt10 from '/src/assets/heads/skin-avatar 11.png';     
import headAlt9 from '/src/assets/heads/skin-avatar 10.png';      
import headAlt16 from '/src/assets/heads/skin-avatar 16.png';     
import headAlt17 from '/src/assets/heads/skin-avatar 17.png';     
import headAlt18 from '/src/assets/heads/skin-avatar 18.png';     


import headAlt12 from '/src/assets/heads/Без названия (12).jpeg'; 
import headAlt13 from '/src/assets/heads/Без названия (13).jpeg'; 
import headSkindex from '/src/assets/heads/The Skindex.jpeg'; 
import headMinecraft5 from '/src/assets/heads/minecraft head 5 (1).jpeg'; 
import headMishifu from '/src/assets/heads/𝗠𝗜𝗦𝗛𝗜𝗙𝗨 ♡ __ Perfil de minecraft.jpeg'; 
import woodenHead from '/src/assets/wooden axe minecraft items.jpeg';     


import coinImg from '/src/assets/Moneda Pixel Art.jpeg';


import chest1 from '/src/assets/case/skin-avatar 12.png';
import chest2 from '/src/assets/case/skin-avatar 13.png';
import chest3 from '/src/assets/case/skin-avatar 14.png';


import serviceImg from '/src/assets/minecraft render 7.jpeg';
import bookImg from '/src/assets/writable book.jpeg'


import planetImg from '/src/assets/Без названия (11).jpeg';

function Donate({ mode }) {
  const [filter, setFilter] = useState('all');

  
  const getRecentImage = (donateName) => rankImageByName[donateName] || bookImg;


  

  // Начальное состояние ошибок
  const initState = {
    errorName: false,
    errorPromocode: false,
    errorPayment: false,
    errorPaymentMethod: false,
  };

  // Редюсер для ошибок
  function Reducer(state, action) {
    switch (action.type) {
      case 'errorName':
        return { ...state, errorName: true };
      case 'errorPromocode':
        return { ...state, errorPromocode: true };
      case 'errorPayment':
        return { ...state, errorPayment: true };
      case 'errorPaymentMethod':
        return { ...state, errorPaymentMethod: true };
      case 'reset':
        return initState;
      default:
        return state;
    }
  }

  const [errors, dispatch] = useReducer(Reducer, initState);

  // Модальное окно
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Обработчик клика на элемент
  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
    setModalOpen(true);
  }

  // Обработчик закрытия модального окна
  function handleCloseModal() {
    setModalOpen(false);
    setSelectedItem(null);
    dispatch({ type: 'reset' });
  }

  

  // Обработчик валидации имени и промокода
  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: 'reset' });

    const form = e.currentTarget;
    const nameValue = form.elements.name?.value ?? '';
    //const promocodeValue = form.elements.promocode?.value ?? '';

    if (nameValue.length < 3 || nameValue.length > 20) {
      dispatch({ type: 'errorName' });
    }

   /* if (promocodeValue && promocodeValue !== '123456') {
      dispatch({ type: 'errorPromocode' });
    } */
  }
  return (

    <section className={styles.donate}>
      <h2 className={styles.donateTitle}>Магазин <span className={styles.donateTitleAccent}>FastCraft</span></h2>

      {/* Селектор режима  */}
      <div className={styles.modeBar}>
        <span className={styles.modeLabel}>Режим:</span>
        <button className={`${styles.modeChip} ${styles.modeChipActive}`}>{mode}</button>
      </div>

      {/* Категории */}
      <div className={styles.filters}>
        <button className={`${styles.filterChip} ${filter === 'all' && styles.filterChipActive}`} onClick={() => setFilter('all')}>Все</button>
        <button className={`${styles.filterChip} ${filter === 'ranks' && styles.filterChipActive}`} onClick={() => setFilter('ranks')}>Привилегии</button>
        <button className={`${styles.filterChip} ${filter === 'cases' && styles.filterChipActive}`} onClick={() => setFilter('cases')}>Кейсы</button>
        <button className={`${styles.filterChip} ${filter === 'fastcoins' && styles.filterChipActive}`} onClick={() => setFilter('fastcoins')}>FastCoins</button>
        <button className={`${styles.filterChip} ${filter === 'services' && styles.filterChipActive}`} onClick={() => setFilter('services')}>Услуги</button>
      </div>

      {/* Привилегии */}
      {(filter === 'all' || filter === 'ranks') && (
        <div className={styles.group}>
          <h3 className={styles.groupTitle}>Привилегии</h3>
          <div className={styles.grid}>
            {[
              // В этой секции ТОЛЬКО головы. Если не хватает — повторяем.
              // 11 уникальных картинок + 2 повтора (всего 13 карточек)
              { name: 'QUANTUM', price: '25 ₽', img: head1 },
              { name: 'QUASAR', price: '99 ₽', img: head3 },
              { name: 'APEX', price: '149 ₽', img: headAlt10 },
              { name: 'RESONANT', price: '249 ₽', img: headAlt9 },
              { name: 'PARAGON', price: '849 ₽', img: headAlt17 },
              { name: 'PARADIGM', price: '1499 ₽', img: headAlt18 },
              { name: 'KALEIDO', price: '2599 ₽', img: headAlt12 },
              { name: 'ZEPHYR', price: '4999 ₽', img: headAlt13 },
              { name: 'VERMILION', price: '6999 ₽', img: headSkindex },
              { name: 'ETHERA', price: '9999 ₽', img: headMinecraft5 },
              { name: 'CATHARSIS', price: '14999 ₽', img: headMishifu },
              { name: 'MISTER', price: '14999 ₽', img: head1 }, // повтор 1
             
            ].map((item) => (
              <article key={item.name} className={styles.card} onClick={() => handleItemClick(item.name)}>
                <header className={styles.cardHeader}>
                  <span className={styles.cardPrice}>{item.price}</span>
                </header>
                <div className={styles.cardImageWrapper}>
                  <img src={item.img} alt={item.name} className={styles.cardImage} />
                </div>
                <div className={styles.cardBody}>
                  <h4 className={styles.cardTitle}>{item.name}</h4>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
      {/* Кейсы / сундуки */}
      {(filter === 'all' || filter === 'cases') && (
        <div className={styles.group}>
          <h3 className={styles.groupTitle}>Кейсы и сундуки</h3>
          <div className={styles.grid}>
            {[
              { name: '1 Ключ', price: '59 ₽', img: chest1 },
              { name: '10 Ключей', price: '249 ₽', img: chest2 },
              { name: '50 Ключей', price: '799 ₽', img: chest3 },
            ].map((item) => (
              <article key={item.name} className={styles.card} onClick={() => handleItemClick(item.name)}>
                <header className={styles.cardHeader}>
                  <span className={styles.cardPrice}>{item.price}</span>
                </header>
                <div className={styles.cardImageWrapper}>
                  <img src={item.img} alt={item.name} className={styles.cardImage} />
                </div>
                <div className={styles.cardBody}>
                  <h4 className={styles.cardTitle}>{item.name}</h4>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
      {/* FastCoins */}
      {(filter === 'all' || filter === 'fastcoins') && (
        <div className={styles.group}>
          <h3 className={styles.groupTitle}>FastCoins</h3>
          <div className={styles.grid}>
            {[
              50, 100, 250, 500, 750, 1000, 1500, 2500, 3750, 4500, 5750, 6500, 10000, 12500, 15000,
            ].map((amount) => (
              <article key={amount} className={styles.card} onClick={() => handleItemClick(amount)}>
                <header className={styles.cardHeader}>
                  <span className={styles.cardPrice}>{amount} ₽</span>
                </header>
                <div className={styles.cardImageWrapper}>
                  <img src={coinImg} alt={`${amount} FastCoins`} className={styles.cardImage} />
                </div>
                <div className={styles.cardBody}>
                  <h4 className={styles.cardTitle}>{amount} FastCoins</h4>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
      {/* Услуги */}
      {(filter === 'all' || filter === 'services') && (
        <div className={styles.group}>
          <h3 className={styles.groupTitle}>Услуги</h3>
          <div className={styles.grid}>
            {[
              { name: 'Разбан', price: '199 ₽', img: headAlt10 },
              { name: 'Размут', price: '99 ₽', img: headAlt10 },
              { name: 'Восстановление аккаунта', price: '799 ₽', img: bookImg },
              { name: 'Покупка Battle Pass', price: '399 ₽', img: planetImg },
              { name: 'Приват на спавне', price: '249 ₽', img: woodenHead },
            ].map((item) => (
              <article key={item.name} className={styles.card} onClick={() => handleItemClick(item.name)}>
                <header className={styles.cardHeader}>
                  <span className={styles.cardPrice}>{item.price}</span>
                </header>
                <div className={styles.cardImageWrapper}>
                  <img src={item.img} alt={item.name} className={styles.cardImage} />
                </div>
                <div className={styles.cardBody}>
                  <h4 className={styles.cardTitle}>{item.name}</h4>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
      {/* Последние покупки (без логики, только верстка) */}
      <section className={styles.recent}>
        <div className={styles.recentHeader}>
          <h3 className={styles.recentTitle}>
            Последние <span className={styles.recentAccent}>покупки</span>
          </h3>
          <p className={styles.recentSubtitle}>Игроки уже покупают прямо сейчас</p>
        </div>
        <div className={styles.recentScroller}>
          {mocks.map((player, index) => (
            <article key={`${player.name}-${index}`} className={styles.recentCard}>
              <div className={styles.recentImageWrapper}>
                <img
                  src={getRecentImage(player.donate)}
                  alt={player.donate}
                  className={styles.recentImage}
                />
              </div>
              <div className={styles.recentBody}>
                <p className={styles.recentItemName}>{player.donate}</p>
                <p className={styles.recentPlayer}>@{player.name}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      {modalOpen && (
        <Modal
          isOpen={modalOpen}
          onClose={handleCloseModal}
          selectedItem={selectedItem}
          errorName={errors.errorName}
          errorPromocode={errors.errorPromocode}
          handleSubmit={handleSubmit}
        />
      )}
    </section>
  );
}

export default Donate;