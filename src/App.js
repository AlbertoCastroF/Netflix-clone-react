import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Home, Signin, Signup, Browse } from "./pages";
import { HOME, SIGN_IN, SIGN_UP, BROWSE } from "./constants/routes";
import { useAuthListener } from "./hooks";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";

export function App() {
  const { user } = useAuthListener();
  return (
    <Router>
      <Switch>
        <IsUserRedirect user={user} loggedInPath={BROWSE} path={SIGN_IN}>
          <Signin />
        </IsUserRedirect>
        <IsUserRedirect user={user} loggedInPath={BROWSE} path={SIGN_UP}>
          <Signup />
        </IsUserRedirect>
        <ProtectedRoute user={user} path={BROWSE}>
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect user={user} loggedInPath={BROWSE} path={HOME}>
          <Home />
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}
