import styles from './homepage.module.css';
import ServerIntro from '../ServerIntro/ServerIntro';
import ServerStats from '../ServerStats/ServerStats';
import About from '../about/about';
import SelectMode from '../SelectMode/Selectmode';
import Donate from '../donate/donate';

function HomePage() {
  return (
    <div className={styles.homepage}>
      <div className={styles.topRow}>
        <ServerIntro />
        <ServerStats />
      </div>
      <section id="about-section">
        <About />
      </section>
      <section id="donate-section">
        <SelectMode />
      </section>
    </div>
  );
}

export default HomePage;
