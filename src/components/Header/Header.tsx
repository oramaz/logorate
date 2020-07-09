import React, { useEffect, useState } from "react";
import "../../assets/styles/Header.css";
import { useHistory } from "react-router";
import { LogoIcon, UserIcon, ProfileIcon } from "../../assets/images/Icons";
import { Link } from "react-router-dom";
import { CategoriesPopover } from "./CategoriesPopover";

export const Header: React.FC = () => {
  const history = useHistory();
  const headerLinks = [
    { name: "Home", to: "/", onHoverClass: "" },
    { name: "About", to: "/about", onHoverClass: "" },
    {
      name: "Categories",
      to: "/categories",
      onHoverClass: "header-links-categories",
    },
    { name: "Sub", to: "/sub", onHoverClass: "" },
  ];
  const [usersOnline, setUsersOnline] = useState<number>(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setUsersOnline(Math.floor(Math.random() * 7) + 3);
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
              history.push("/");
            }}
          >
            <LogoIcon />
          </div>
        </div>
        <div className="header-container-3">
          <div className="header-users-online">
            <div
              className="svg-my-auto header-users-icon"
              style={{ marginRight: "10px" }}
            >
              <UserIcon />
            </div>
            <div className="d-flex" style={{ marginRight: "50px" }}>
              <div className="my-auto header-text gradient-text">
                {usersOnline}
              </div>
            </div>
          </div>
          {headerLinks.map((x) => {
            return x.name === "Categories" ? (
              <div
                key={x.name}
                className="header-links header-links-categories"
              >
                <Link to={x.to} className="m-auto disableLinkStyle">
                  {x.name}
                </Link>
                <CategoriesPopover />
              </div>
            ) : (
                <Link key={x.name} className={"header-links"} to={x.to}>
                  <span className="m-auto">{x.name}</span>
                </Link>
              );
          })}

          {sessionStorage.getItem("token") &&
            <div className="d-flex">
              <div
                className="header-icon-link header-profile-icon"
                onClick={() => {
                  history.push("/profile");
                }}
              >
                <ProfileIcon />
              </div>
            </div>
          }
          {!sessionStorage.getItem("token") &&
            <div className="d-flex">
              <button
                type="button"
                className="content-btn-sm m-auto"
                style={{ padding: "7px 20px ", fontSize: "15px" }}
                aria-valuetext="Log in"
                onClick={() => history.push("/login")}
              />
            </div>
          }
        </div>
      </div>
    </div>
  );
};
