import { Link } from "react-router-dom";
import Logo from "../../images/Logo";
import "./styles.css";

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <div className="header__links">
        <Link to="/" className="header__link">
          Главная
        </Link>
        <Link to="/profile" className="header__link">
          Профиль
        </Link>
        <Link to="/news" className="header__link">
          Новости
        </Link>
        <Link to="/sign-in" className="header__link">
          Вход
        </Link>
      </div>
    </div>
  );
};

export default Header;
