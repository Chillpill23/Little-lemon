import { mainLinks } from '../constants/Links';
import { Scroll } from "../utils/Scroll";

const Nav = () => {
  return(
    <ul>
      {mainLinks.map(link => {
        return(
          <li>
            <a 
              className="nav-link"
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