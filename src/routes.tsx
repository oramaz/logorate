import * as React from "react";
import {Route, Switch, Redirect, useLocation} from "react-router-dom";
import {NotFoundPage} from "./components/404/NotFoundPage";
import {LoginPage} from "./views/Auth/LoginPage";
import {SignupPage} from "./views/Auth/SignupPage";
import {Header} from "./components/Header/Header";
import {SocialLogin} from "./components/SocialAuth/SocialLogin";
import {PasswordRecovery} from "./views/Auth/PasswordRecovery";
import {Footer} from "./components/Footer/Footer";
import {HomePage} from "./views/HomePage";
import {LoginModal} from "./components/Modals/LoginModal";
import {ProposalModal} from "./components/Modals/ProposalModal";
import {SearchLogoPage} from "./views/SearchLogoPage";
import {SearchByCategoryPage} from "./views/CategorySearch";
import {LogoBlockSm} from "./components/General/LogoSmallBlock";
import {LogoPage} from "./views/LogoPage";
import {useEffect} from "react";
import {ProfilePage} from "./views/Profile";

const Routes: React.FC = () => {
   const location = useLocation();

   return (
      <div>
         <Header/>
            <Switch>
               <Route exact path='/login' component={LoginPage} />
               <Route exact path='/signup' component={SignupPage} />
               <Route exact path="/auth/:provider" component={SocialLogin} />
               <Route exact path='/recovery' component={PasswordRecovery} />
               <Route exact path='/search' component={SearchLogoPage} />
               <Route exact path='/categories' component={SearchByCategoryPage} />
               <Route exact path='/profile' component={ProfilePage} />
               <Route exact path='/logo' component={LogoPage} />
               <Route exact path='/' component={HomePage} />
               <Route component={NotFoundPage} />
            </Switch>
         <Footer/>
         <LoginModal/>
         <ProposalModal/>
      </div>
   )
};

export default Routes;
