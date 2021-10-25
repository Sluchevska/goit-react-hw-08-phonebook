import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavigationStyle, Span } from './AuthNav.styled';
import { BsFillArrowRightSquareFill,BsFillPersonPlusFill } from "react-icons/bs";

const styles = {
  link: {
    color:'#383764',
  },
  activeLink: {
    color: '#100de0',
  },
};

export default function AuthNav() {
  return (
    <div>
      <NavigationStyle>
      <NavLink
        to="/register"
        exact
      style={styles.link}
        activeStyle={styles.activeLink}
        >
        <BsFillPersonPlusFill />
          <Span>
             
            Register</Span>
        
      </NavLink>
      </NavigationStyle>
      <NavigationStyle>
      <NavLink
        to="/login"
        exact
       style={styles.link}
        activeStyle={styles.activeLink}
        >
          <BsFillArrowRightSquareFill />
          <Span>
      Log in
      </Span>
      </NavLink>
      </NavigationStyle>
    </div>
  );
}