import React, { lazy, Suspense, useContext } from 'react';
import {
  BrowserRouter, Route, Switch, Redirect, 
} from 'react-router-dom';
import Loading from 'src/components/atoms/Loading';
import { firebaseAuth } from 'src/provider/AuthProvider';

const Home = lazy(() => import('../pages/home'));
const Channel = lazy(() => import('../pages/channel'));
const Room = lazy(() => import('../pages/room'));


function AuthRoute({ user, component, path } : {
  user: firebase.default.User | null,
  component: React.LazyExoticComponent<() => JSX.Element>,
  path: string,
}) {
  return (
    user 
      ? (
        <Route
          path={path}
          component={component}
        />
      )
      : <Redirect to={{ pathname: '/' }} />
  );
}
const Root = () => {
  const { user, loadingAuthState } = useContext(firebaseAuth);
  
  return (
    <BrowserRouter>
      {
        loadingAuthState ? <Loading position="fixed" />
          : (
            <Suspense fallback={<Loading position="fixed" />}>
              <Switch>
                <Route exact path="/" component={Home} />
                <AuthRoute user={user} path="/channel" component={Channel} />
                <AuthRoute user={user} path="/room/:id" component={Room} />
              </Switch>
            </Suspense>
          )
      }
    </BrowserRouter>
  );
};
export default Root;
