import Nav from "./Nav"
import logo from '../images/Logo.svg';
import '../css/Header.css'

const Header = () => {
  return(
      <header>
        <div className="header__wrapper container">
          <img src={logo} alt='little lemon logo'/>
          <Nav/>
        </div>
      </header>
  )
}

export default Header;