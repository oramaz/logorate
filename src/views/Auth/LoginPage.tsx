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
import axios, {AxiosResponse} from "axios";
import {ReactComponent} from "*.svg";
import {Title} from "../../components/Title";
import {LoginForm} from "../../components/Auth/LoginForm";

export const LoginPage: React.FC = () => {
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
      <div className="content-container-1">
         <LoginForm/>
      </div>
   );
};
