import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from 'redux/auth';
import { NavigationStyle } from '../AuthNav/AuthNav.styled';
import { BsFillPeopleFill, BsFillHouseDoorFill} from "react-icons/bs";

const styles = {
 
  activeLink: {
    color: '#E84A5F',
  },
};

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavigationStyle>
        <NavLink to="/" exact activeStyle={styles.activeLink}>
          <BsFillHouseDoorFill/>
          Home
        </NavLink>
      </NavigationStyle>
      <NavigationStyle>
        {isLoggedIn && (
          <NavLink
            to="/contacts"
            exact
     
            activeStyle={styles.activeLink}
          >
            <BsFillPeopleFill/>
            Contacts
          </NavLink>
        )}
      </NavigationStyle>
    </nav>
  );
}

export default Navigation;