import { useState } from 'react';
import { Briefcase, Menu, User, X } from 'lucide-react';
import s from './Navbar.module.scss';
import NavbarItem from './NavbarItem';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={s.navbar}>
            <div className={s.navbar__container}>
                <button className={s.navbar__mobileToggle} onClick={toggleMenu} aria-label="Menu">
                    {isMenuOpen ? <X strokeWidth={2} /> : <Menu strokeWidth={2} />}
                </button>

                <a href="/" className={s.logo}>
                    <div className={s.logo__iconWrapper}>
                        <Briefcase strokeWidth={2.5} />
                    </div>
                    <span className={s.logo__brand}>JobConnect</span>
                </a>

                <button className={s.navbar__mobileProfile} aria-label="Profil">
                    <User strokeWidth={2} />
                </button>

                <ul className={s.navbar__menu} data-open={isMenuOpen}>
                    <NavbarItem text="Accueil" href="#" />
                    <NavbarItem text="Offres d'emploi" href="#" />
                    <NavbarItem text="Entreprises" href="#" />
                </ul>

                <div className={s.navbar__actions}>
                    <a href="#" className={`${s.btn} ${s['btn--secondary']}`}>Se connecter</a>
                    <a href="#" className={`${s.btn} ${s['btn--primary']}`}>S'inscrire</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;