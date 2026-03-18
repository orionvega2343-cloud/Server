import styles from './rulespage.module.css';
import Intro from '../rulesIntro/rulesIntro';
import { useState } from 'react';
import Warning from '../warning/warning';
import SelectMode from '/src/pages/homepage/components/SelectMode/Selectmode';
import RulesGrief from '../rules/GriefRules/rules';
import RulesAnarchy from '../rules/AnarchyRules/Anarchyrules..jsx';
function RulesPage () {
    const [rulesMode, setRulesMode] = useState(null)
    function toggleRules() {
        setRulesMode(!rulesMode);
    }
    return (
        <div>
            <section className={styles.rulespage}>
                <div className={styles.rulesContainer}>
                    <Intro />
                    <Warning />
                    <SelectMode showDonate={false} onModeSelected={setRulesMode} />
                    {rulesMode === 'Гриф' && <RulesGrief />}
                    {rulesMode === 'Анархия' && <RulesAnarchy />}
                </div>
            </section>
        </div>
    )
}

export default RulesPage