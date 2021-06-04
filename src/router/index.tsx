import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('../pages/home'));
const Channel = lazy(() => import('../pages/channel'));
const Room = lazy(() => import('../pages/room'));

const Root = () => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/channel" component={Channel} />
        <Route path="/room/:id" component={Room} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);
export default Root;
