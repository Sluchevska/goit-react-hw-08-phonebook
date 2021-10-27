import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigationStyle = styled.div`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #1a1eac;
  font-size: 20px;
`;
export const Span = styled.span`
  margin-left: 5px;
`;

export const NavigationLink = styled(NavLink)`
 color: #383764;
  &.active{
   color: #100de0;
 };
 &:hover{
   color: #100de0
 }

`
