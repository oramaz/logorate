import React from "react";
import "../assets/styles/about.css"
import { Title } from "../components/General/Title";


export const AboutPage: React.FC = () => {

    return (
        <div className="content-container-1 transition-load">
            <div className="title-social-container" style={{ marginBottom: "50px" }}>
                <Title text="About us" style={{ marginBottom: "50px", marginTop: "50px" }} />
                <div className="content-text-small about-text-container mx-auto text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl purus mauris sed neque, egestas interdum dui. Sit sed viverra est eget adipiscing pretium congue. A proin sit quis in. Amet in commodo neque feugiat senectus ultrices sit. Eget dictumst semper mauris lectus vitae consectetur nibh tellus dignissim. Cras nascetur mi nulla congue vitae nisl tellus ullamcorper. Quis eget commodo eros quam quis morbi.
               </div>
            </div>

        </div>
    );
};
