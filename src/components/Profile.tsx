import { useContext, useState } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengeContext);
    var rick = false;

    if(level > 4){
        rick = true;
    }

    return (
        <div className={styles.profileContainer}>
            { !rick ? (
            <>
            <img src="icons/morty.png" alt="Foto de Perfil" />
            <div>
                <strong>Morty Smith</strong>
                <p>
                    Level {level}
                </p>
            </div>
            </>
            ):(
                <>
            <img src="icons/rick-colors.png" alt="Foto de Perfil" />
            <div>
                <strong>Rick Sanchez</strong>
                <p>
                    <img src="/icons/medal.svg" alt="medal"/>
                    Level {level}
                </p>
            </div>
            </>
            )
        }
            
        </div>
    )
}

/* { activeChallenge ? (
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
    <p>
        <img src="icons/flask.png" alt="level" />
    </p>
    <strong>Finalize um ciclo para liberar o próximo desafio</strong>
</div>
)
} */