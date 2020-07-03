import React, {useEffect, useState} from "react";
import {
   EmailInputIcon,
   FBIcon,
   GooglePlusIcon, PwdInputIcon,
   InstIcon,
   VKIcon
} from "../../assets/images/Icons";
import {useHistory} from "react-router-dom";
import { API_URL } from "../../utils/urls"
import axios from "axios";
import {Title} from "../General/Title";

export const LoginForm: React.FC = () => {
   const history = useHistory();

   const [googleAuthLink, setGoogleAuthLink] = useState("")
   const [VKAuthLink, setVKAuthLink] = useState("")
   const [FBAuthLink, setFBAuthLink] = useState("")

   useEffect(() => {
      const getSocialAuthLinks =  async () => {
         const google = await axios.get(
            `${API_URL}/users/login/google`,
            {},
         );
         setGoogleAuthLink(google.data.url)

         const vk = await axios.get(
            `${API_URL}/users/login/vkontakte`,
            {},
         );
         setVKAuthLink(vk.data.url)

         const fb = await axios.get(
            `${API_URL}/users/login/facebook`,
            {},
         );
         setFBAuthLink(fb.data.url)
      }
      getSocialAuthLinks()
   }, [])

   const handleLogin = async (e: any) => {
      e.preventDefault();
      const email = e.target.elements.email.value
      const password = e.target.elements.password.value

      if(email && password) {
         const res = await axios.post(
            `${API_URL}/users/login`,
            {
               email: email,
               password: password
            },
            {
               headers: {
                  'Access-Control-Allow-Origin': '*',
                  'Content-Type': 'application/json'
               },
            },
         );
         console.log(res)
      }
   }

   return (
      <React.Fragment>
         <div className="title-social-container">
            <Title text="Sign in" style={{marginBottom: "30px"}}/>
            <div className="d-flex mx-auto">
               <div className="inst-icon"><InstIcon/></div>
               <div className="google-plus-icon" onClick={() => window.location.href = googleAuthLink}><GooglePlusIcon/></div>
               <div className="vk-icon" onClick={() => window.location.href = VKAuthLink}><VKIcon/></div>
               <div className="fb-icon" onClick={() => window.location.href = FBAuthLink}><FBIcon/></div>
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
                  <button type="submit" className="content-btn mx-auto" aria-valuetext="Let's go!"/>
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
      </React.Fragment>
   );
};
