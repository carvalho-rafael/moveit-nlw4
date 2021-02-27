import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.scss'

export default function ChallengeBox() {
    const { activeChallenge, resetChallenge } = useContext(ChallengesContext);

    function failed() {

    }
    function succeeded() {

    }
    return (
        <div className={styles.challengeBoxContainer}>
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
                            onClick={resetChallenge}
                        >
                            Falhei
                        </button>
                        <button
                            type="button"
                            className={styles.succeededBtn}
                            onClick={succeeded}
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