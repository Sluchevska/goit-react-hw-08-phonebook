import { Container } from './App.styled';
import AppBar from '../AppBar/AppBar';
import { Switch } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { authOperations, authSelectors } from 'redux/auth';
import PublicRoute from 'components/routs/PublicRouter';
import PrivateRoute from 'components/routs/PrivateRoute';

const HomeView = lazy(() => import('../../views/HomeView/HomeView.js'));
const RegisterView = lazy(() =>
  import('../../views/RegisterView/RegisterView'),
);
const ContactsView = lazy(() =>
  import('../../views/ContactsView/ContactsView.js'),
);
const LoginView = lazy(() => import('../../views/LoginView/LoginView.js'));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshingCurrentUser = useSelector(
    authSelectors.getIsRefreshingCurrentUser,
  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshingCurrentUser && (
      <Container>
        <AppBar />
        <Switch>
          <Suspense fallback={<p>Loading...</p>}>
            <PublicRoute exact path="/">
              <HomeView />
            </PublicRoute>
            <PublicRoute
              exact
              path="/register"
              redirectTo="/contacts"
              restricted
            >
              <RegisterView />
            </PublicRoute>
            <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
              <LoginView />
            </PublicRoute>
            <PrivateRoute path="/contacts" redirectTo="/login">
              <ContactsView />
            </PrivateRoute>
          </Suspense>
        </Switch>
        <ToastContainer autoClose={2500} />
      </Container>
    )
  );
}
