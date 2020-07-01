import React, {useEffect, useState} from "react";
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

export const PasswordRecovery: React.FC = () => {

    return (
       <div className="content-container-1">
           <div className="title-social-container" style={{marginBottom: "50px"}}>
               <div className="content-title mx-auto"  style={{marginBottom: "30px"}}>
                   Password recovery
               </div>
               <div className="content-text-small mx-auto text-center" >
                   <div>Enter Your email address and we will send you</div>instructions for password recovery
               </div>
           </div>
           <div className="content-form-container mx-auto">
               <form>
                   <div className="content-input-container" style={{marginBottom: "50px"}}>
                       <span className="input-icon"><EmailInputIcon/></span>
                       <input type="email" name="email" required className="content-input" placeholder="Email"/>
                   </div>

                   <div className="d-flex">
                       <button type="submit" className="content-btn mx-auto">Recover</button>
                   </div>
               </form>
           </div>
       </div>
    );
};
