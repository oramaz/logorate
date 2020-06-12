import React from "react";
import "../../assets/styles/404.css";

export const NotFoundPage: React.FC = () => {

    return (
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404"/>
                <h1>404</h1>
                <h2>Oops! Page Not Be Found</h2>
                <a href="/" style={{marginTop: "20px"}}>Back to homepage</a>
            </div>
        </div>
    );
};
