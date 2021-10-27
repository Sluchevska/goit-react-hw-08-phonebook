import React from 'react';
import { useSelector } from 'react-redux';

import { authSelectors } from 'redux/auth';
import {
  NavigationLink,
  NavigationStyle,
  Span,
} from '../AuthNav/AuthNav.styled';
import { BsFillPeopleFill, BsFillHouseDoorFill } from 'react-icons/bs';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavigationStyle>
        {!isLoggedIn && (
          <NavigationLink to="/" exact>
            <BsFillHouseDoorFill />
            <Span>Home</Span>
          </NavigationLink>
        )}
      </NavigationStyle>
      <NavigationStyle>
        {isLoggedIn && (
          <NavigationLink to="/contacts" exact>
            <BsFillPeopleFill />
            <Span>Contacts</Span>
          </NavigationLink>
        )}
      </NavigationStyle>
    </nav>
  );
};

export default Navigation;
