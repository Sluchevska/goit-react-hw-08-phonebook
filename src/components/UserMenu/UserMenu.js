import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import { Container, NameStyle } from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <Container>
      <NameStyle>Welcome, {name}</NameStyle>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Sign out
      </button>
    </Container>
  );
}
