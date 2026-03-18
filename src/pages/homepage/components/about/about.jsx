import styles from './about.module.css';
import { useState, useEffect, useRef } from 'react';
import { PlayModal } from '/src/components/ui/Modal/Modal';
function  About () {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        function handleScroll () {
            if (ref.current) {
                const scroll = ref.current.getBoundingClientRect().top; if (scroll < window.innerHeight * 0.8) {
                    setIsVisible(true);
                }
            }
            
        }
        handleScroll();
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    //Модалка 
    const [show, setShow] = useState(false);
    function handleShow () {
        setShow(true)
    }
    function handleClose () {
        setShow(false)
    }
    return (
        <section className={styles.about}>
            <div className={styles.aboutContainer} ref={ref}>
                <h2 className={styles.aboutTitle}>О нас</h2>
                <p className={styles.aboutDescription}>Мы - лучший майнкрафт сервер по 3 причинам:</p>
                <ul className={styles.aboutList}>
                    <li className={`${styles.aboutItem} ${isVisible ? styles.fadeIn : ''}`}>1. Мы имеем самые лучшие моды и плагины</li>
                    <li className={`${styles.aboutItem} ${isVisible ? styles.fadeIn : ''}`}>2.Мы имеем самое красивое оформление и кастомный ресурспак</li>
                    <li className={`${styles.aboutItem} ${isVisible ? styles.fadeIn : ''}`}>3. Мы имеем самое доброжелательное и отзывчивое комьюнити,как игроков так и модераторов!</li>
                </ul>
                <button className={styles.aboutButton} onClick={handleShow}>Начать играть</button>
            </div>
            <PlayModal isOpen={show} onClose={handleClose} />
        </section>              
    )
}

export default About;                                                                                                               