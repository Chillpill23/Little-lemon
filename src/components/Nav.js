import { mainLinks } from '../constants/Links';
import { Scroll } from "../utils/Scroll";
import '../css/Nav.css'

import {Link} from 'react-router-dom'

const Nav = () => {
  return(
    <ul>
      {mainLinks.map(link => {
        return(
          <li key={link.name}>
            {link.type === 'section' ? (
              <a 
                className="nav__link"
                title={link.title} 
                href={link.url}
                onClick={(e) => {
                  e.preventDefault();
                  Scroll(link.name)
                }}
              >
                {link.name}
              </a>
            ):(
              <Link
                className="nav__link"
                title={link.title} 
                to={link.url}
              >
                {link.name}
              </Link>
            )}
          </li>
        )
      })}
    </ul>
  )
}

export default Nav;