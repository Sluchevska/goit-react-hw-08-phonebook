import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavigationStyle } from './AuthNav.styled';

const styles = {
  
  activeLink: {
    color: 'rgb(4 21 51)',
  },
};

export default function AuthNav() {
  return (
    <div>
      <NavigationStyle>
      <NavLink
        to="/register"
        exact
      
        activeStyle={styles.activeLink}
      >
        Register
      </NavLink>
      </NavigationStyle>
      <NavigationStyle>
      <NavLink
        to="/login"
        exact
       
        activeStyle={styles.activeLink}
      >
      Log in
      </NavLink>
      </NavigationStyle>
    </div>
  );
}