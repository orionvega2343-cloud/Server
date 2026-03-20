import styles from './donDesc.Intro.module.css';

function DonDesc() {
    return (
        <div>
            <div className={styles.donDesc}>
                <div className={styles.donDescContainer}>
                    <div className={styles.donDescTitle}>
                        <h1>Описание <span className={styles.donDescTitleSpan}>доната:</span></h1>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DonDesc;