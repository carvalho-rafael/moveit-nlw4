import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import { useEffect, useState } from 'react'
import styles from '../styles/components/Countdown.module.scss'
import { CountdownContext } from '../contexts/CountdownContext';
import { ThemeContext } from '../contexts/ThemeContext';

let countdownTimeout: NodeJS.Timeout;

export default function Countdown() {
    const {
        minutes,
        seconds,
        active,
        hasFinished,
        resetCountdown,
        startCountdown
    } = useContext(CountdownContext);

    const { dark } = useContext(ThemeContext);
    
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');


    return (
        <div>
            <div className={`${styles.countdownContainer} ${dark ? styles.dark: ''}`}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>
            {hasFinished ? (
                <button
                    disabled
                    className={styles.finishedCountdownBtn}
                >
                    Ciclo Encerrado
                    <img src="icons/ok.svg" alt="ok" />
                </button>
            ) : (
                    <>
                        {active ? (
                            <button
                                type="button"
                                className={styles.stopCountdownBtn}
                                onClick={resetCountdown}
                            >
                                Parar Ciclo
                            </button>
                        ) : (
                                <button
                                    type="button"
                                    className={styles.startCountdownBtn}
                                    onClick={startCountdown}
                                >
                                    Iniciar um Ciclo
                                </button>
                            )
                        }
                    </>
                )}
        </div >
    )
}