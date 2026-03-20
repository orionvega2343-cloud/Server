import styles from './descc.module.css';
import DonWarning from '../components/donWarning/donWarning';
import DonDesc from '../components/don-descpage/donDescIntro.jsx';
import DonAnarchy from '../descAnarchy/donAnarchy';
import DonGrief from '../components/descGrief/donGrief';
import SelectMode from '/src/pages/homepage/components/SelectMode/Selectmode';
import { useState } from 'react';

function DescPage () {
    const [selectedMode, setSelectedMode] = useState(null);
    function toggleMode () {
        setSelectedMode(!selectedMode);
    }
    return (
        <div className={styles.descriptionPage}>
            <div className={styles.descriptionContainer}>
                <DonDesc />
                <DonWarning />
                {/* TODO: открытие/рендер контента по selectedMode ты пропишешь сам */}
                <SelectMode showDonate={false} onModeSelected={setSelectedMode} onDonateSelected={toggleMode} />
                {selectedMode === 'Анархия' && <DonAnarchy />}
                {selectedMode === 'Гриф' && <DonGrief />}
                
            </div>
        </div>
    )
}

export default DescPage;