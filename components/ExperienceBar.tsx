import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/ExperienceBar.module.scss'

export default function ExperienceBar() {
    const { currentExperience, expirienceToNextLevel } = useContext(ChallengesContext);

    const percentToNextLevel = (Math.round(currentExperience * 100) / expirienceToNextLevel);
    return (
        <header className={styles.experienceBar}>
            <span>0 px</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }}></div>
                <span
                    style={{ left: `${percentToNextLevel}%` }}
                    className={styles.currentExperience}>
                    {currentExperience} xp
                    </span>
            </div>
            <span>{expirienceToNextLevel} px</span>
        </header>
    )
}