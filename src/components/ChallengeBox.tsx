import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';

import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    const { activeChallenge, resetChallenge } = useContext(ChallengeContext);

    const hasActiveChallenge = true;

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
                        <button>Completei</button>
                        <button onClick={resetChallenge}>Desisti</button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                    <strong>Finalize um ciclo para liberar o próximo desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="level" />
                    Suba de nível completando desafios
                </p>
                </div>
            )
            }
        </div>
    );
}