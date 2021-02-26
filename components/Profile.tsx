import styles from '../styles/components/Profile.module.scss'

export default function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/carvalho-rafael.png" alt="Rafael Carvalho" />
            <div>
                <strong>Rafael Carvalho</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level 2
                </p>
            </div>
        </div>
    )
}