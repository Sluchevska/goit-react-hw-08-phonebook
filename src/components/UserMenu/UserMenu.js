import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import { Container, NameStyle, AvatarStyle } from './UserMenu.styled';
// import defaultAvatar from './default-avatar.png';



export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
//   const avatar = defaultAvatar;

  return (
    <Container>
      {/* <AvatarStyle src={avatar} alt="" width="32"  /> */}
      <NameStyle>Welcome, {name}</NameStyle>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Sign out
      </button>
    </Container>
  );
}
