import * as React from "react";
import {Route, Switch, Redirect, useLocation} from "react-router-dom";
import {NotFoundPage} from "./components/404/NotFoundPage";
import {LoginPage} from "./views/Auth/LoginPage";
import {SignupPage} from "./views/Auth/SignupPage";
import {Header} from "./components/Header/Header";
import {SocialLogin} from "./components/SocialAuth/SocialLogin";

const Routes: React.FC = () => {
   const location = useLocation();
   return (
      <div>
         <Header/>
         <Switch>
            <Route path='/login' component={LoginPage} />
            <Route path='/signup' component={SignupPage} />
            <Route exact path="/auth/:provider" component={SocialLogin} />
            <Route component={NotFoundPage} />
         </Switch>
      </div>
   )
};

export default Routes;
