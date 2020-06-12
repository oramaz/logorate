import * as React from "react";
import { Route, Switch } from "react-router-dom";
import {NotFoundPage} from "./components/404/NotFoundPage";

const Routes: React.FC = () => (
    <Switch>
        {/*<Route exact path='/' component={HomePage} />*/}
        <Route path="*" component={NotFoundPage} />
    </Switch>
);

export default Routes;
