import { mainLinks,socialLinks,contactLinks } from "../constants/Links";
import { Scroll } from '../utils/Scroll'
import logo from '../images/Logo.svg'
import '../css/Footer.css'

const Footer = () =>{
  return(
    <footer className="footer footer--section">
      <img src={logo} alt="little lemon logo"/>
      <div className="footer__section">
        <h4 className="footer__header">Doormat Navigation</h4>
        {mainLinks.map(link => {
          return(
            <a 
              key={link.name} 
              title={link.title} 
              href={link.url} 
              onClick={Scroll(link.name)} 
              className="link footer__link"
            >
              {link.name}
            </a>
          )
        })}
      </div>

      <div className="footer__section">
        <h4 className="footer__header">Contact</h4>
        {contactLinks.map(link => {
          return(
            <a 
              key={link.name} 
              title={link.title} 
              href={link.url} 
              className="link footer__link"
            >
              {link.name}
            </a> 
          )
        })}
      </div>

      <div className="footer__section">
        <h4 className="footer__header">Social Media Links</h4>
        {socialLinks.map(link => {
          return(
            <a 
              key={link.name} 
              title={link.title}  
              href={link.url} 
              className="link footer__link"
            >
              {link.name}
            </a>
          )
        })}
      </div>
    </footer>
  )
}

export default Footer;