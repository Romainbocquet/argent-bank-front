import { NavLink, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import '../styles/Header.css';
import logo from '../assets/img/argentBankLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {

  const location = useLocation();
  
    useEffect(() => {
      if (location.pathname === '/') {
        document.title = 'Argent Bnak - Accueil';
      } else if (location.pathname.includes('/login')) {
        document.title = 'Argent Bnak - Login';
      }
      //  else if (location.pathname.includes('/about')) {
      //   document.title = 'Kasa - A Propos';
      // } 
      else {
        document.title = 'Argent Bnak - 404';
      }
    }, [location.pathname]);


  return (
    <div className="main-nav">
      <NavLink to="/">
        <img src={logo} alt="Logo Argent Bank" />
      </NavLink>
      <nav>
        <NavLink to="/login">
          <span>
            <FontAwesomeIcon icon="fa-solid fa-circle-user" />
          </span>
          Sign In
        </NavLink>
        {/* <NavLink to="/">
          Sign Out
        </NavLink> */}
        </nav>
    </div>
  );
}

export default Header;
