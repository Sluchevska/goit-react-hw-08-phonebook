import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavigationStyle } from './AuthNav.styled';
import { BsFillArrowRightSquareFill,BsFillPersonPlusFill } from "react-icons/bs";

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
        <BsFillPersonPlusFill/>
        Register
      </NavLink>
      </NavigationStyle>
      <NavigationStyle>
      <NavLink
        to="/login"
        exact
       
        activeStyle={styles.activeLink}
        >
          <BsFillArrowRightSquareFill/>
      Log in
      </NavLink>
      </NavigationStyle>
    </div>
  );
}