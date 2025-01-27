import { mainLinks } from '../constants/Links';
import { Scroll } from "../utils/Scroll";
import '../css/Nav.css'

const Nav = () => {
  return(
    <ul>
      {mainLinks.map(link => {
        return(
          <li>
            <a 
              className="nav__link"
              key={link.name} 
              title={link.title} 
              href={link.url}
              onClick={Scroll(link.name)}
            >
              {link.name}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default Nav;