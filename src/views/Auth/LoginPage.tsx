import React from "react";
import {
    EmailInputIcon,
    FBIcon,
    GooglePlusIcon, PwdInputIcon,
    TwitterIcon,
    VKIcon
} from "../../assets/images/Icons";
import {useHistory} from "react-router-dom";
import { API_URL } from "../../utils/urls"
import axios, {AxiosResponse} from "axios";

export const LoginPage: React.FC = () => {
    const history = useHistory();

    const socialAuth = async (provider: string) => {
        const res = await axios.get(
           `${API_URL}/users/login/${provider}`,
           {
               params: {
                   provider: provider
               }
           },
        );
    }

    const handleLogin = async (e: any) => {
        e.preventDefault();
        const email = e.target.elements.email.value
        const password = e.target.elements.password.value

        if(email && password) {
            const res = await axios.post(
               `${API_URL}/users/login`,
               {
                  headers: {
                     'Accept': 'application/json, text/plain, */*',
                     'Content-Type': 'application/json'
                  },
                   params: {
                       email: email,
                       password: password
                   }
               },
            );
            console.log(res)
        }
    }

    return (
       <div className="content-container-1">
           <div className="title-social-container">
               <div className="content-title mx-auto"  style={{marginBottom: "30px"}}>
                   Sign in
               </div>
               <div className="d-flex mx-auto">
                   <div className="twitter-icon"><TwitterIcon/></div>
                   <div className="google-plus-icon" onClick={() => window.location.href = `${API_URL}/users/login/google`}><GooglePlusIcon/></div>
                   <div className="vk-icon" onClick={() =>   window.location.href = `${API_URL}/users/login/vkontakte`}><VKIcon/></div>
                   <div className="fb-icon" onClick={() => window.location.href = `${API_URL}/users/login/facebook`}><FBIcon/></div>
               </div>
               <div className="content-text" style={{margin: "30px auto 30px auto"}}>or</div>
           </div>
           <div className="content-form-container mx-auto"  style={{marginBottom: "30px"}}>
               <form onSubmit={(e) => handleLogin(e)} method={'POST'}>
                   <div className="content-input-container" style={{marginBottom: "24px"}}>
                       <span className="input-icon"><EmailInputIcon/></span>
                       <input type="email" name="email" required className="content-input" placeholder="Email"/>
                   </div>
                   <div className="content-input-container" style={{marginBottom: "24px"}}>
                       <span className="input-icon"><PwdInputIcon/></span>
                       <input type="password" name="password" required className="content-input" placeholder="Password" />
                   </div>
                   <div className="d-flex justify-content-between" style={{marginBottom: "50px"}}>
                       <div className="d-flex">
                           <input type="checkbox" style={{marginRight: "10px"}} className="content-checkbox" />
                           <div className="content-text-small">Remember me</div>
                       </div>
                       <div
                          className="content-text-link-gray content-text-small"
                          onClick={() => {
                              history.push("/recovery")
                          }}>
                           Forgot your password?
                       </div>
                   </div>
                   <div className="d-flex">
                       <button type="submit" className="content-btn mx-auto">Let's go</button>
                   </div>
               </form>
           </div>
           <div className="d-flex">
               <div className="mx-auto content-text">
                   Don't have an account yet?
                   <span style={{marginLeft: "10px"}}
                         className="content-text-link"
                         onClick={() => {
                             history.push("/signup")
                         }}
                   >
                        Sign up!
                    </span>
               </div>
           </div>
       </div>
    );
};
