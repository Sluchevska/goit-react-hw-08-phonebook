import React from 'react';

import { NavigationLink, NavigationStyle, Span } from './AuthNav.styled';
import {
  BsFillArrowRightSquareFill,
  BsFillPersonPlusFill,
} from 'react-icons/bs';

export default function AuthNav() {
  return (
    <div>
      <NavigationStyle>
        <NavigationLink to="/register" exact>
          <BsFillPersonPlusFill />
          <Span>Register</Span>
        </NavigationLink>
      </NavigationStyle>
      <NavigationStyle>
        <NavigationLink to="/login" exact>
          <BsFillArrowRightSquareFill />
          <Span>Log in</Span>
        </NavigationLink>
      </NavigationStyle>
    </div>
  );
}
