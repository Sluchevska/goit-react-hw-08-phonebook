const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;
const getIsRefreshingCurrentUser = state => state.auth.isRefreshingCurrentUser;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsRefreshingCurrentUser
};
export default authSelectors;