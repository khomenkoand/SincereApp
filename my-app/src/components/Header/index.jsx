import { Link } from "react-router-dom";
import Logo from "../../images/Logo";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <div className={styles.header__links}>
        <Link to="/" className={styles.header__link}>
          Главная
        </Link>
        <Link to="/profile" className={styles.header__link}>
          Профиль
        </Link>
        <Link to="/news" className={styles.header__link}>
          Новости
        </Link>
        <Link to="/login" className={styles.header__link}>
          Вход
        </Link>
      </div>
    </div>
  );
};

export default Header;
