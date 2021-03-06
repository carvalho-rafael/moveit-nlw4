import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import { ThemeContext } from '../contexts/ThemeContext';
import styles from '../styles/components/ChallengeBox.module.scss'

export default function ChallengeBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext);
    const { dark } = useContext(ThemeContext);

    function handleSucceeded() {
        completeChallenge()
        resetCountdown()
    }

    function handleFailed() {
        resetChallenge()
        resetCountdown()
    }
    return (
        <div className={`${styles.challengeBoxContainer} ${dark ? styles.dark: ''}`}>
            {activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header> Ganhe {activeChallenge.amount} xp </header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt="body" />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button
                            type="button"
                            className={styles.failedBtn}
                            onClick={handleFailed}
                        >
                            Falhei
                        </button>
                        <button
                            type="button"
                            className={styles.succeededBtn}
                            onClick={handleSucceeded}
                        >
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="level up" />
                    Avance de level completando desafios
                </p>
                </div>
            )}
        </div>
    )
}