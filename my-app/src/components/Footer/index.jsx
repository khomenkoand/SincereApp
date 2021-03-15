import classnames from "classnames";
import Logo from "../../images/Logo";
import FbIcon from "../../images/FbIcon";
import InstIcon from "../../images/InstIcon";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__logo}>
        <Logo />
      </div>

      <div className={styles.footer__documents}>
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
      <div className={styles.footer__contacts}>
        <h2>Контакты</h2>
        <div>
          <div className={classnames(styles.footer__contact, styles.facebook)}>
            <a href="#0">
              <FbIcon />
            </a>
          </div>
          <div className={classnames(styles.footer__contact, styles.instagram)}>
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
