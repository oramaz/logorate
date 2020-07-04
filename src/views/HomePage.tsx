import React, { useContext, useState, useEffect } from "react"
import "../assets/styles/App.css";
import "../assets/styles/Home.css";
import { HomePreview } from "../components/HomePage/PrewiewBlock";
import { Title } from "../components/General/Title";
import { Tag } from "../components/General/Tag";
import { LogoBlockSm } from "../components/General/LogoSmallBlock";
import { Logo } from "../models/Logo";
import { LogosContext } from "./App";

export const HomePage: React.FC = () => {
   useEffect(() => {
      window.scrollTo(0, 0)
   },
      [])

   const popularCategories = ["Beach", "IT", "Flowers", "Family", "Cafe", "Travel", "Art", "Business", "Sport"]
   const logos = useContext(LogosContext)

   return (
      <React.Fragment>
         <HomePreview logos={logos} />
         <div className="content-container-1">
            <Title text="Most popular categories" style={{ marginBottom: "50px" }} />
            <div className="content-tags-container justify-content-center mx-auto" style={{ marginBottom: "100px" }}>
               {popularCategories.map(category => {
                  return (
                     <Tag key={category} name={category} style={{ margin: "0 15px 15px 0px" }} linkTo="/categories" />
                  )
               })}
            </div>
            <div className="text-center" style={{ marginBottom: "150px" }}>
               <Title text="Latest downloads" style={{ marginBottom: "50px" }} />
               <div className="content-logos-container" style={{ marginBottom: "20px" }}>
                  {logos.slice(0, 5).map(logo => {
                     return (
                        <LogoBlockSm key={logo.link} logoUrl={logo.link} style={{ margin: "5px 5px 30px 5px" }} name={logo.name} />
                     )
                  })}
               </div>
               <button type="button" className="content-btn mx-auto" aria-valuetext="Load more" />
            </div>
            <div className="text-center">
               <Title text="Most popular" style={{ marginBottom: "50px" }} />
               <div className="content-logos-container" style={{ marginBottom: "20px" }}>
                  {logos.slice(0, 10).map((logo: Logo) => {
                     return (
                        <LogoBlockSm key={logo.link} logoUrl={logo.link} name={logo.name} />
                     )
                  })}
               </div>
               <button type="button" className="content-btn mx-auto" aria-valuetext="Load more" />
            </div>
         </div>
      </React.Fragment>
   )
}