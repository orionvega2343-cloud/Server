import styles from './donAnarchy.module.css';
import { useState } from 'react';

function DonAnarchy() {
    const [isOpen, setIsOpen] = useState(null);
    function toggleAccordion(id) {
        setIsOpen(prev => prev == id ? null : id);
    }
    return (
        <div className={styles.donAccordion}>
            <div className={styles.donAccordionTitle}>
                <h1>Анархия:</h1>
            </div>
            <button className={`${styles.donAccordionBtn} ${styles.fadeIn}`} onClick={() => toggleAccordion('QUANTUM')}>
                <p>FRACTAL</p>
                {isOpen === 'QUANTUM' && (
                    <div className={styles.donAccordionContent}>
                        <p>Возможности</p>
                    </div>
                )}
            </button>
            <button className={`${styles.donAccordionBtn} ${styles.fadeIn}`} onClick={() => toggleAccordion('QUASAR')}>
                <p>VERSUS</p>
                {isOpen === 'QUASAR' && (
                    <div className={styles.donAccordionContent}>
                        <p>Возможности</p>
                    </div>
                )}
            </button>
            <button className={`${styles.donAccordionBtn} ${styles.fadeIn}`} onClick={() => toggleAccordion('APEX')}>
                <p>CHRONOS</p>
                {isOpen === 'APEX' && (
                    <div className={styles.donAccordionContent}>
                        <p>Возможности</p>
                    </div>
                )}
            </button>
            <button className={`${styles.donAccordionBtn} ${styles.fadeIn}`} onClick={() => toggleAccordion('RESONANT')}>
                <p>VORTEX</p>
                {isOpen === 'RESONANT' && (
                    <div className={styles.donAccordionContent}>
                        <p>Возможности</p>
                    </div>
                )}
            </button>
            <button className={`${styles.donAccordionBtn} ${styles.fadeIn}`} onClick={() => toggleAccordion('PARAGON')}>
                <p>DREAMSCAPE</p>
                {isOpen === 'PARAGON' && (
                    <div className={styles.donAccordionContent}>
                        <p>Возможности</p>
                    </div>
                )}
            </button>
            <button className={`${styles.donAccordionBtn} ${styles.fadeIn}`} onClick={() => toggleAccordion('PARADIGM')}>
                <p>SYNETHIS</p>
                {isOpen === 'PARADIGM' && (
                    <div className={styles.donAccordionContent}>
                        <p>Возможности</p>
                    </div>
                )}
            </button>
        </div>
    )
}

export default DonAnarchy;