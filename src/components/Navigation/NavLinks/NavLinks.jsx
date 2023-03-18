import s from './NavLinks.module.scss';
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';
import { routes } from '../../../routes/BaseRoutes';
import { NavLink } from 'react-router-dom';
const NavLinks = () => {
  const getWhatsAppLink=()=> {
    const phoneNumber = '+15645446567'; // Replace with your phone number
    const message = 'Hello from my React app!'; // Replace with your message
    return `https://wa.me/${phoneNumber}`;
  }
  return (
    <ul className={s.navBar}>
      <li>
        <NavLink to={routes.HOME} activeClassName={s.active} exact>
          <AiOutlineHome />
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to={routes.ABOUT} activeClassName={s.active}>
          <AiOutlineUser />
          About
        </NavLink>
      </li>
        <li>
        <a href={getWhatsAppLink()} target="_blank">Chat with us on WhatsApp</a>
          </li> 
      <li>
        <NavLink to={routes.PROJECTS} activeClassName={s.active}>
          <AiOutlineFundProjectionScreen />
          Projects
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
