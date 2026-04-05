import s from './Navbar.module.scss';

function Navbar() {
    return (
        <nav className={s.navbar}>
            {/* C'est ce container qui va tout aligner horizontalement */}
            <div className={s.navContainer}>
                
                {/* 1. Bloc Logo (Gauche) */}
                <a href="/" className={s.logo}>
                    <span className={s.icon}>💼</span>
                    <span className={s.brandName}>JobConnect</span>
                </a>

                {/* 2. Bloc Liens (Centre) */}
                {/* On enlève la balise <ul> qui créait des conflits de style */}
                <div className={s.navMenu}>
                    <a href="#" className={s.navLink}>Accueil</a>
                    <a href="#" className={s.navLink}>Offres d'emploi</a>
                    <a href="#" className={s.navLink}>Entreprises</a>
                </div>

                {/* 3. Bloc Boutons (Droite) */}
                <div className={s.authButtons}>
                    <a href="#" className={s.btnSecondary}>Se connecter</a>
                    <a href="#" className={s.btnPrimary}>S'inscrire</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;