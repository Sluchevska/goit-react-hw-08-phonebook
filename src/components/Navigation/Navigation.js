import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from 'redux/auth';
import { NavigationStyle, Span } from '../AuthNav/AuthNav.styled';
import { BsFillPeopleFill, BsFillHouseDoorFill } from 'react-icons/bs';

const styles = {
  link: {
    color: '#383764',
  },
  activeLink: {
    color: '#100de0',
  },
};

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavigationStyle>
        {!isLoggedIn && (
          <NavLink
            to="/"
            exact
            activeStyle={styles.activeLink}
            style={styles.link}
          >
            <BsFillHouseDoorFill />
            <Span>Home</Span>
          </NavLink>
        )}
      </NavigationStyle>
      <NavigationStyle>
        {isLoggedIn && (
          <NavLink
            to="/contacts"
            exact
            style={styles.link}
            activeStyle={styles.activeLink}
          >
            <BsFillPeopleFill />
            <Span>Contacts</Span>
          </NavLink>
        )}
      </NavigationStyle>
    </nav>
  );
};

export default Navigation;
