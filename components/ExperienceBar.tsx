import styles from '../styles/components/ExperienceBar.module.scss'

export default function ExperienceBar() {
    return (
        <header className={styles.experienceBar}>
            <span>0 px</span>
            <div>
                <div style={{ width: '60%' }}></div>
                <span
                    style={{ left: '60%' }}
                    className={styles.currentExperience}>
                    300 xp
                    </span>
            </div>
            <span>600 px</span>
        </header>
    )
}