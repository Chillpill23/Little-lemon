import Nav from "./Nav"
import logo from '../images/Logo.svg';

const Header = () => {
  return(
      <header>
        <img src={logo} alt='little lemon logo'/>
        <Nav/>
      </header>
  )
}

export default Header;