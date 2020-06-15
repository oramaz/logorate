import * as React from "react";
import {Route, Switch, Redirect, useLocation} from "react-router-dom";
import {NotFoundPage} from "./components/404/NotFoundPage";
import {LoginPage} from "./views/LoginPage";
import {SignupPage} from "./views/SignupPage";
import {Header} from "./components/Header/Header";

const Routes: React.FC = () => {
    const location = useLocation();
    return (
        <div>
            {location.pathname != "/404" &&
                <Header/>
            }
            <Switch>
                <Route path='/login' component={LoginPage} />
                <Route path='/signup' component={SignupPage} />
                <Route path='/404' component={NotFoundPage} />
                <Redirect to='/404'/>
            </Switch>
        </div>
    )
};

export default Routes;
