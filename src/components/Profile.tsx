import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/64939709?v=4" alt="Foto de Perfil" />
            <div>
                <strong>Henrique Xaud</strong>
                <p>Level 1</p>
            </div>
        </div>
    )
}