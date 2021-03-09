import { useContext, useEffect, useState } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.scss'
import { signOut } from 'next-auth/client'
import Switch from "react-switch";
import { FiMoon, FiSun } from 'react-icons/fi'
import { ThemeContext } from '../contexts/ThemeContext';

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
    const { toggleDark, dark } = useContext(ThemeContext)

    const [checked, setChecked] = useState(false)

    function handleChange() {
        setChecked(!checked);
        toggleDark()
    }

    return (
        <div className={styles.profileContainer}>
            <img src={props.user.image} alt="Rafael Carvalho" />
            <div>
                <strong>{props.user.name}</strong> <br />
                <span>{props.user.email}</span> <br />
                <p>
                    <img src="icons/level.svg" alt="level" />
                    Level {level}
                </p>
                <div className={styles.settingsContainer}>
                    <button onClick={() => signOut()}>Sign out</button>
                    <label>
                        <Switch
                            onChange={handleChange}
                            checked={checked}
                            uncheckedIcon={false}
                            checkedIcon={false}
                            handleDiameter={30}
                            height={20}
                            width={40}
                            offHandleColor="#ffffff"
                            onHandleColor="#000000"
                            onColor={'#000000'}
                            offColor={'#ffffff'}
                            checkedHandleIcon={
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        height: "100%",
                                        color: "white",
                                        fontSize: 18
                                    }}
                                >
                                    <FiMoon />
                                </div>
                            }
                            uncheckedHandleIcon={
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        height: "100%",
                                        color: "yellow",
                                        fontSize: 18
                                    }}
                                >
                                    <FiSun />
                                </div>
                            }
                        />
                    </label>
                </div>
            </div>
        </div>
    )
}