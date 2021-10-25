import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import { Button, Container, NameStyle } from './UserMenu.styled';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import { Span } from 'components/AuthNav/AuthNav.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <Container>
      <NameStyle>Welcome, {name}</NameStyle>
      <Button type="button" onClick={() => dispatch(authOperations.logOut())}>
        <BsFillArrowLeftSquareFill />
        <Span>Sign out</Span>
      </Button>
    </Container>
  );
}
