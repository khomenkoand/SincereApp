import { Link } from "react-router-dom";
import { NEWS, HOME, LOGIN, PROFILE } from "../../constants/Routes";
import Logo from "../../images/Logo";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <div className={styles.header__links}>
        <Link to={HOME} className={styles.header__link}>
          Главная
        </Link>
        <Link to={PROFILE} className={styles.header__link}>
          Профиль
        </Link>
        <Link to={NEWS} className={styles.header__link}>
          Новости
        </Link>
        <Link to={LOGIN} className={styles.header__link}>
          Вход
        </Link>
      </div>
    </div>
  );
};

export default Header;
