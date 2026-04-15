import { Briefcase } from 'lucide-react';
import s from './Navbar.module.scss';

function Navbar() {
    return (
        <nav className={s.navbar}>
            <div className={s.navbar__container}>
                
                <a href="/" className={s.logo}>
                    <div className={s.logo__iconWrapper}>
                        <Briefcase 
                            className={s.logo__icon} 
                            strokeWidth={2.5} 
                        />
                    </div>
                    <span className={s.logo__brand}>JobConnect</span>
                </a>

                <div className={s.navbar__menu}>
                    <a href="#" className={s.navbar__link}>Accueil</a>
                    <a href="#" className={s.navbar__link}>Offres d'emploi</a>
                    <a href="#" className={s.navbar__link}>Entreprises</a>
                </div>

                <div className={s.navbar__actions}>
                    <a href="#" className={`${s.btn} ${s['btn--secondary']}`}>Se connecter</a>
                    <a href="#" className={`${s.btn} ${s['btn--primary']}`}>S'inscrire</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;