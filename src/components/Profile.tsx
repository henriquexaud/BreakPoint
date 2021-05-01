import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {

    const { level } = useContext(ChallengeContext);
    let ovo, pintinho, galinha, porco = false;

    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/64939709?v=4" alt="Foto de Perfil" />
            <div>
                <strong>Henrique Xaud</strong>
                <p>

                    <img src="icons/medal.svg" alt="level-1" />

                    {/* <img src="icons/ovo.svg" alt="level-1" /> */}

                    {/* <img src="icons/pintinho.svg" alt="level" />
                    <img src="icons/galinha.svg" alt="level" />
                    <img src="icons/porco.svg" alt="level" /> */}


                    Level {level}
                </p>
            </div>
        </div>
    )
}