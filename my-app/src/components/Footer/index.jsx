import Logo from "../../images/Logo";
import FbIcon from "../../images/FbIcon";
import InstIcon from "../../images/InstIcon";
import "./styles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo">
        <Logo />
      </div>

      <div className="footer__documents">
        <h2>Документы</h2>
        <ul>
          <li>
            <a href="#0">Условия использования</a>
          </li>
          <li>
            <a href="#0">Политика конфиденциальности</a>
          </li>
        </ul>
      </div>
      <div className="footer__contacts">
        <h2>Контакты</h2>
        <div>
          <div className="footer__contact facebook">
            <a href="#0">
              <FbIcon />
            </a>
          </div>
          <div className="footer__contact instagram">
            <a href="#0">
              <InstIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
