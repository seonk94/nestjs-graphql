import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('../page/home'));
const App = lazy(() => import('../page/app'));

const Root = () => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/app" component={App} />
      </Switch>
    </Suspense>
  </BrowserRouter> 
);
export default Root;