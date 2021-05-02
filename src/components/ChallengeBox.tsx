import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import { CountdownContext } from '../contexts/CountdownContext';

import styles from '../styles/components/ChallengeBox.module.css';
import { CompletedChallenges } from './CompletedChallenges';

export function ChallengeBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengeContext);
    const { resetCountdown } = useContext(CountdownContext);

    const hasActiveChallenge = true;

    function handleChallengeSucceeded() {
        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFailed() {
        resetChallenge();
        resetCountdown();
    }

    return (

        <div className={styles.challengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challengeActive}>

                    <header>Ganhe {activeChallenge.xp} xp</header>

                    <main>

                        <img src={`icons/${activeChallenge.img}`} alt="objetivo" />
                        <strong>Novo Desafio</strong>
                        <p>{activeChallenge.description}</p>

                    </main>
                    <footer>

                        <button
                            type='button'
                            onClick={handleChallengeSucceeded}>Completei
                        </button>

                        <button
                            type='button'
                            onClick={handleChallengeFailed}>Desisti
                        </button>

                    </footer>

                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                    <strong>Finalize um ciclo para liberar o próximo desafio</strong>
                    <p>
                        <img src="icons/avatar.svg" alt="level" />
                    </p>
                </div>
            )
            }
        </div>
    );
}