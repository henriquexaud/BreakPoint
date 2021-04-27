import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {

    const hasActiveChallenge = true;

    return (

        <div className={styles.challengeBoxContainer}>
            { hasActiveChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe 400 xp</header>
                    <main>
                        <img src="icons/abra-o-livro.svg" alt="objetivo" />
                        <strong>Novo Desafio</strong>
                        <p>Leia um capítulo do seu livro atual</p>
                    </main>
                    <footer>
                        <button>Completei</button>
                        <button>Desisti</button>
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