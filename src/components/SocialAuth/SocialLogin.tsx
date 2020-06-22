import React, {useEffect} from "react";
import {useHistory, useLocation, useParams} from "react-router-dom";
import { API_URL } from "../../utils/urls"

export const SocialLogin: React.FC = () => {
   const history = useHistory();
   const { provider } = useParams()
   const location = useLocation();

   useEffect(() => {
      fetch(`${API_URL}/users/login/${provider}/callback${location.search}`, { headers: new Headers({ accept: 'application/json' }) })
         .then((response) => {
            if (response.ok) {
               return response.json();
            }
            throw new Error('Something went wrong!');
         })
         .then((data) => {
            sessionStorage.setItem("data", JSON.stringify(data))
            history.push("/login")
         })
         .catch((error) => {
            console.log(error)
         });
   }, [])

   return (
      <div/>
   );
};
