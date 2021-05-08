import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {

    const { level } = useContext(ChallengeContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/64939709?v=4" alt="Foto de Perfil" />
            <div>
                <strong>Henrique Xaud</strong>
                <p>

                    <img src="icons/medal.svg" alt="level-1" />

                    Level {level}
                </p>
            </div>
        </div>
    )
}