import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse, faRightToBracket,faRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
const Navbar = ({isAuth}) => {
  return (
    <nav>
     <Link to = "/"><FontAwesomeIcon icon={faHouse} />
     Home</Link> 
    
    { !isAuth ? (
     <Link to = "/login"> 
     <FontAwesomeIcon icon={faRightToBracket} />
     Login</Link>
     ) : (
      <>
     <Link to="/logout"><FontAwesomeIcon icon={faRightFromBracket} />Logout</Link>
     <Link to = "/createpost"><FontAwesomeIcon icon={faNewspaper} />
     Post</Link> 
     </>
     )
  }
    
    </nav>
  );
};

export default Navbar;