import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.scss'
import { signOut } from 'next-auth/client'

interface User {
    email: string,
    name: string,
    image: string
}

interface ProfileProps {
    user: User
}

export default function Profile(props: ProfileProps) {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src={props.user.image} alt="Rafael Carvalho" />
            <div>
                <strong>{props.user.name}</strong> <br />
                <span>{props.user.email}</span> <br />
                <button onClick={() => signOut()}>Sign out</button>
                <p>
                    <img src="icons/level.svg" alt="level" />
                    Level {level}
                </p>
            </div>
        </div>
    )
}