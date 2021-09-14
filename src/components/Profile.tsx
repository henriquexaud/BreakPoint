import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengeContext);

    return (
        <div className={styles.profileContainer}>
            <img src="icons/morty.png" alt="Foto de Perfil" />
            <div>
                <strong>Morty Smith</strong>
                <p>
                    <img src="icons/medal.svg" alt="level-1" />
                    Level {level}
                </p>
            </div>
        </div>
    )
}