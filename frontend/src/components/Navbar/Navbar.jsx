import { useState } from 'react';
import NavbarItem from './NavbarItem';
import styles from './Navbar.module.scss';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={styles.navContainer}>
            {/* Logo / Nom du projet */}
            <div className={styles.logo}>
                <span className={styles.icon}>💼</span>
                <span className={styles.brandName}>JobConnect</span>
            </div>

            {/* Menu Burger (Mobile seulement) */}
            <button className={styles.burger} onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* Liste des liens */}
                <ul className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
                    <NavbarItem text="Accueil" />
                    <NavbarItem text="Offres d'emploi" />
                    <NavbarItem text="Entreprises" />
                    <div className={styles.authButtons}>
                        <NavbarItem text="Se connecter" />
                        <NavbarItem text="S'inscrire" variant="button" />
                    </div>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;