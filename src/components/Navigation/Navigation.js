import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavigationStyle } from '../AuthNav/AuthNav.styled';

const styles = {
 
  activeLink: {
    color: '#E84A5F',
  },
};

const Navigation = () => (
  <nav>
    <NavigationStyle>
    <NavLink to="/" exact activeStyle={styles.activeLink}>
      Home
    </NavLink>
      </NavigationStyle>
<NavigationStyle>
    <NavLink
      to="/contacts"
      exact
     
      activeStyle={styles.activeLink}
    >
     Notes
    </NavLink>
    </NavigationStyle>
  </nav>
);

export default Navigation;