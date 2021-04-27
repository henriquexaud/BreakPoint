import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/64939709?v=4" alt="Foto de Perfil" />
            <div>
                <strong>Henrique Xaud</strong>
                <p>
                    <img src="icons/ovo.svg" alt="level" />
                    {/* <img src="icons/pintinho.svg" alt="level" />
                    <img src="icons/galinha.svg" alt="level" />
                    <img src="icons/porco.svg" alt="level" /> */}
                    Level 1
                </p>
            </div>
        </div>
    )
}