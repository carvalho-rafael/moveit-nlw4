import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.scss'
import { useSession, signOut } from 'next-auth/client'

export default function Profile() {
    const [session, loading] = useSession()
    const { level } = useContext(ChallengesContext);

    if(loading) {
        return <p>loading...</p>
    }
    return (
        <div className={styles.profileContainer}>
            <img src={session.user.image} alt="Rafael Carvalho" />
            <div>
                <strong>{session.user.name}</strong> <br />
                <span>{session.user.email}</span> <br />
                <button onClick={() => signOut()}>Sign out</button>
                <p>
                    <img src="icons/level.svg" alt="level" />
                    Level {level}
                </p>
            </div>
        </div>
    )
}