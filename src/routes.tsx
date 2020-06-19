import * as React from "react";
import {Route, Switch, Redirect, useLocation} from "react-router-dom";
import {NotFoundPage} from "./components/404/NotFoundPage";
import {LoginPage} from "./views/Auth/LoginPage";
import {SignupPage} from "./views/Auth/SignupPage";
import {Header} from "./components/Header/Header";
import {LoginGoogle} from "./components/SocialAuth/LoginGoogle";

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
               <Route exact path="/auth/google" component={LoginGoogle} />
                {/*<Route path='/404' component={NotFoundPage} />*/}
                {/*<Redirect to='/404'/>*/}
            </Switch>
        </div>
    )
};

export default Routes;
