import { Link } from 'react-router-dom';
import layout3 from '../ImageArtist/layout3.png';
import styles from './JoinPlatform.module.css';

const JoinPlatform = () => {
    return (
        <div className={styles.joinPlatform}>
            <div className={styles.joinPlatformText}>
                <h2 className={styles.joinPlatformTitle}>Join Our Platform</h2>
                <p className={styles.joinPlatformDescription}>
                    You can be one of the <span className={styles.joinPlatformHighlight}>members</span> of our platform by just adding some necessarily information. if you already have an account on our website, you can just hit the <span className={styles.joinPlatformLink}>Login button</span>.
                </p>
            </div>
            <div className={styles.joinPlatformButtons}>
                <Link to="/signup" className={styles.joinPlatformBtnSignup}>Sign Up</Link>
                <Link to="/login" className={styles.joinPlatformBtnLogin}>Login</Link>
            </div>
            <img src={layout3} alt="layout3" className={styles.joinPlatformLayout3} />
        </div>
    );
};

export default JoinPlatform;
