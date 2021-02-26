import styles from '../styles/components/CompletedChallenges.module.scss'

export default function CompletedChallenges() {
    return (
        <div className={styles.completedChallengesContainer}>
            <span>Desafios Completos</span>
            <span>8</span>
        </div>
    )
}