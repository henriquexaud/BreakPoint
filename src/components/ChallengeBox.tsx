import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    return (
        <div className={styles.challengeBoxContainer}>
            <div className={styles.challengeNotActive}>
                <strong>Finalize um ciclo para liberar o próximo desafio</strong>
                <p>
                    <img src="icons/level-up.svg" alt="level" />
                    Suba de nível completando desafios
                </p>
            </div>
        </div>
    );
}