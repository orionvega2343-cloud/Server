import styles from './Selectmode.module.css';
import Donate from '../donate/donate';
import { useState, useEffect, useRef } from 'react';
function SelectMode({ showDonate = true, onModeSelected }) {


    //Анимация 
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null)
    useEffect(() => {
        function handleScroll() {
            if (ref.current) {
                const scroll = ref.current.getBoundingClientRect().top;
                if (scroll < window.innerHeight * 0.8) {
                    setIsVisible(true);
                }
            }
        }
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])



    //Режимы
    const [mode, setMode] = useState(true);
    const [isDonateVisible, setIsDonateVisible] = useState(false);
    const [activeMode, setActiveMode] = useState('grief');

    //Гриф
    function GriefClick() {
        setIsDonateVisible(true)
        setActiveMode('Гриф');
        setMode(false);
        onModeSelected?.('Гриф');
    }

    //Анархия
    function AnarchyClick() {
        setIsDonateVisible(true)
        setActiveMode('Анархия');
        setMode(false);
        onModeSelected?.('Анархия');
    }
    return (
        <div>
            {mode && (
                <section className={`${styles.selectMode} ${isVisible ? styles.selectModeVisible : ''}`} ref={ref}>
                    <h2 className={styles.selectModeTitle}>Выберите режим</h2>
                    <div className={styles.selectModeContainer}>
                        <div className={styles.selectModeItem} onClick={GriefClick}>
                            <h3 className={styles.selectModeItemTitle}>Гриф</h3>
                        </div>
                        <div className={styles.selectModeItem} onClick={AnarchyClick}>
                            <h3 className={styles.selectModeItemTitle}>Анархия</h3>
                        </div>
                    </div>
                </section>
            )}
            {showDonate && isDonateVisible && !mode && <Donate mode={activeMode} />}
        </div>

    )
}

export default SelectMode;