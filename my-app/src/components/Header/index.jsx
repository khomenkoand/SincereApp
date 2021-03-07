import Logo from "../../images/Logo";
import "./styles.css";

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <div className="header__links">
        <span>Главная</span>
        <span>Профиль</span>
        <span>Новости</span>
        <span>Вход</span>
      </div>
    </div>
  );
};

export default Header;
