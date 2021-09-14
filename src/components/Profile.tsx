import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengeContext);

    return (
        <div className={styles.profileContainer}>
            <img src="icons/rick.png" alt="Foto de Perfil" />
            <div>
                <strong>Rick Sanchez</strong>
                <p>
                    Level {level}
                </p>
            </div>
        </div>
    )
}