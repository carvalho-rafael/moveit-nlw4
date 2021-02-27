import { useEffect, useState } from 'react'
import styles from '../styles/components/Countdown.module.scss'

let countdownTimeout: NodeJS.Timeout;

export default function Countdown() {
    const [time, setTime] = useState(0.05 * 60);
    const [active, setActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountdown() {
        setActive(true);
    }

    function resetCountdown() {
        setActive(false);
        clearTimeout(countdownTimeout);
        setTime(0.05 * 60);
    }

    useEffect(() => {
        if (active && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000);
        } else if (active && time == 0) {
            setHasFinished(true);
            setActive(false);
        }
    }, [active, time])

    return (
        <div>
            <div className={styles.countdownContainer}>
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