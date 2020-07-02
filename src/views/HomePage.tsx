import React, {useState} from "react"
import "../assets/styles/App.css";
import "../assets/styles/Home.css";
import {HomePreview} from "../components/HomePage/PrewiewBlock";
import {Title} from "../components/Title";
import {Tag} from "../components/Tag";
import Logos from "../assets/logos.json"
import {LogoBlockSm} from "../components/LogoSmallBlock";
import {Modal} from "react-bootstrap";
import {EmailInputIcon, FBIcon, GooglePlusIcon, InstIcon, PwdInputIcon, VKIcon} from "../assets/images/Icons";
import {LoginForm} from "../components/Auth/LoginForm";
import {LoginModal} from "../components/Modals/LoginModal";
import {ProposalModal} from "../components/Modals/ProposalModal";

export const HomePage: React.FC = () => {
   const popularCategories= ["Beach", "IT", "Flowers", "Family", "Cafe", "Travel", "Art", "Business", "Sport"]
   const [isLoginModal, setIsLoginModal] = useState(true)

   return (
      <React.Fragment>
         <HomePreview/>
         <div className="content-container-1">
               <Title text="Most popular categories" style={{marginBottom: "50px"}} />
            <div className="content-tags-container mx-auto" style={{marginBottom: "100px"}}>
               {popularCategories.map(category => {
                  return (
                     <Tag key={category}  name={category} style={{margin: "0 15px 15px 0px"}} linkTo="#"/>
                  )
               })}
            </div>
            <div className="text-center" style={{marginBottom: "150px"}}>
               <Title text="Latest downloads" style={{marginBottom: "50px"}}/>
               <div className="content-logos-container" style={{marginBottom: "20px"}}>
                  {Logos.slice(0, 5).map(logo => {
                     return (
                        <LogoBlockSm key={logo.link} logoUrl={logo.link} style={{margin: "5px 5px 30px 5px"}}  name={logo.name}/>
                     )
                  })}
               </div>
               <button type="button" className="content-btn mx-auto">Load more</button>
            </div>
            <div className="text-center">
               <Title text="Most popular" style={{marginBottom: "50px"}}/>
               <div className="content-logos-container" style={{marginBottom: "20px"}}>
                  {Logos.slice(0, 10).map(logo => {
                     return (
                        <LogoBlockSm key={logo.link} logoUrl={logo.link} style={{margin: "5px 5px 30px 5px"}}  name={logo.name}/>
                     )
                  })}
               </div>
               <button type="button" className="content-btn mx-auto">Load more</button>
            </div>
         </div>
      </React.Fragment>
   )
}