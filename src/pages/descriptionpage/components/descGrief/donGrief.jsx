import styles from './donGrief.module.css';
import { useState } from 'react';

function DonGrief() {
    const [isOpen, setIsOpen] = useState(null);

    function toggleAccordion(id) {
        setIsOpen((prev) => (prev === id ? null : id));
    }
  
    return (
        <div className={styles.donAccordion}>
            <div className={styles.donAccordionTitle}>
                <h1>Гриф:</h1>
            </div>

            <button className={`${styles.donAccordionBtn} ${styles.fadeIn}`} type="button" onClick={() => toggleAccordion('QUANTUM')}>
                <p>QUANTUM</p>
                {isOpen === 'QUANTUM' && (
                    <div className={styles.donAccordionContent}>
                        <p>Возможности</p>
                    </div>
                )}
            </button>

            <button className={`${styles.donAccordionBtn} ${styles.fadeIn}`} type="button" onClick={() => toggleAccordion('QUASAR')}>
                <p>QUASAR</p>
                {isOpen === 'QUASAR' && (
                    <div className={styles.donAccordionContent}>
                        <p>Возможности</p>
                    </div>
                )}
            </button>

            <button className={`${styles.donAccordionBtn} ${styles.fadeIn}`} type="button" onClick={() => toggleAccordion('APEX')}>
                <p>APEX</p>
                {isOpen === 'APEX' && (
                    <div className={styles.donAccordionContent}>
                        <p>Возможности</p>
                    </div>
                )}
            </button>

            <button className={`${styles.donAccordionBtn} ${styles.fadeIn}`} type="button" onClick={() => toggleAccordion('RESONANT')}>
                <p>RESONANT</p>
                {isOpen === 'RESONANT' && (
                    <div className={styles.donAccordionContent}>
                        <p>Возможности</p>
                    </div>
                )}
            </button>

            <button className={`${styles.donAccordionBtn} ${styles.fadeIn}`} type="button" onClick={() => toggleAccordion('PARAGON')}>
                <p>PARAGON</p>
                {isOpen === 'PARAGON' && (
                    <div className={styles.donAccordionContent}>
                        <p>Возможности</p>
                    </div>
                )}
            </button>

            <button className={`${styles.donAccordionBtn} ${styles.fadeIn}`} type="button" onClick={() => toggleAccordion('PARADIGM')}>
                <p>PARADIGM</p>
                {isOpen === 'PARADIGM' && (
                    <div className={styles.donAccordionContent}>
                        <p>Возможности</p>
                    </div>
                )}
            </button>

            <button className={`${styles.donAccordionBtn} ${styles.fadeIn}`} type="button" onClick={() => toggleAccordion('KALEIDO')}>
                <p>KALEIDO</p>
                {isOpen === 'KALEIDO' && (
                    <div className={styles.donAccordionContent}>
                        <p>Возможности</p>
                    </div>
                )}
            </button>

            <button className={`${styles.donAccordionBtn} ${styles.fadeIn}`} type="button" onClick={() => toggleAccordion('ZEPHYR')}>
                <p>ZEPHYR</p>
                {isOpen === 'ZEPHYR' && (
                    <div className={styles.donAccordionContent}>
                        <p>Возможности</p>
                    </div>
                )}
            </button>

            <button className={`${styles.donAccordionBtn} ${styles.fadeIn}`} type="button" onClick={() => toggleAccordion('VERMILION')}>
                <p>VERMILION</p>
                {isOpen === 'VERMILION' && (
                    <div className={styles.donAccordionContent}>
                        <p>Возможности</p>
                    </div>
                )}
            </button>

            <button className={`${styles.donAccordionBtn} ${styles.fadeIn}`} type="button" onClick={() => toggleAccordion('ETHERA')}>
                <p>ETHERA</p>
                {isOpen === 'ETHERA' && (
                    <div className={styles.donAccordionContent}>
                        <p>Возможности</p>
                    </div>
                )}
            </button>

            <button className={`${styles.donAccordionBtn} ${styles.fadeIn}`} type="button" onClick={() => toggleAccordion('CATHARSIS')}>
                <p>CATHARSIS</p>
                {isOpen === 'CATHARSIS' && (
                    <div className={styles.donAccordionContent}>
                        <p>Возможности</p>
                    </div>
                )}
            </button>
        </div>
    );
}

export default DonGrief;