import styles from './NavbarItem.module.scss';

function NavbarItem({ text, href = "#", variant = "link" }) {
  // On génère dynamiquement la classe selon la variante
  const itemClass = variant === "button" ? styles.navButton : styles.navLink;

  return (
    <li>
      <a href={href} className={itemClass}>
        {text}
      </a>
    </li>
  );
}

export default NavbarItem;