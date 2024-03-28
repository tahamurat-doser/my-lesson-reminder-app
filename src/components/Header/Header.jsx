import "./Header.scss";
import Logo from "../../helper/logo.png";

function Header() {
  return (
    <header className="header" >
      <img className="header__image" src={Logo} alt="" />
      <h1 className="header__h1" >My Lesson Reminder</h1>
    </header>
  );
}

export default Header;
