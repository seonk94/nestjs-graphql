import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const LazyComponent = (path) => lazy(() => import(`../page/${path}`));


const Root = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/" component={LazyComponent("home")} />
                    <Route path="/app" component={LazyComponent("app")} />
                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}
export default Root;