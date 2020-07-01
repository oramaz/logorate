import React, {useEffect, useState} from "react";
import "../../assets/styles/Header.css";
import { useHistory } from "react-router";
import {LogoIcon, UserIcon, ProfileIcon} from "../../assets/images/Icons";
import {Link} from "react-router-dom";

export const Header: React.FC = () => {
    const history = useHistory();
    const headerLinks = [
        {name: "Home", to: "/"},
        {name: "About", to: "/about"},
        {name: "Category", to: "/categories"},
        {name: "Sub", to: "/sub"},
    ]
    const [usersOnline, setUsersOnline] = useState<number>(5)

    useEffect(() => {
        const interval = setInterval(() => {
            setUsersOnline(Math.floor(Math.random() * 10) + 1);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="header-container-1">
            <div className="header-container-2">
                <div className="header-logo-icon-container">
                    <div
                        className="header-logo-icon header-icon-link"
                        onClick={() => {
                            history.push("/")
                        }}
                    >
                        <LogoIcon/>
                    </div>
                </div>
                <div className="header-container-3">
                    <div className="header-users-online">
                        <div className="svg-my-auto header-users-icon" style={{marginRight: "10px"}}>
                            <UserIcon/>
                        </div>
                        <div className="d-flex" style={{marginRight: "50px"}}>
                            <div className="my-auto header-text gradient-text">{usersOnline}</div>
                        </div>
                    </div>
                    {headerLinks.map(x => {
                        return (
                            <div className="d-flex">
                                <Link className="header-links" to={x.to}>
                                    {x.name}
                                </Link>
                            </div>
                        )
                    })}
                    <div className="d-flex" >
                        <div
                            className="header-icon-link header-profile-icon"
                            onClick={() => {
                                history.push("/profile")
                            }}
                        >
                            <ProfileIcon/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
