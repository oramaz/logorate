import React, { useEffect, useState } from "react";
import "../../assets/styles/Header.css";
import { useHistory } from "react-router";
import { LogoIcon, UserIcon, ProfileIcon } from "../../assets/images/Icons";
import { Link } from "react-router-dom";

export const CategoriesPopover: React.FC = () => {
  const categories = [
    "Beach",
    "IT",
    "Flowers",
    "Family",
    "Cafe",
    "Travel",
    "Art",
    "Business",
    "Sport",
  ];

  return (
    <div className="header-popover-container" style={{ cursor: "default" }}>
      {categories.map((category) => {
        return (
          <div
            key={category}
            className="d-inline-block"
            style={{ padding: "10px 25px" }}
          >
            <Link
              to="/categories"
              style={{ color: "black" }}
              className="d-inline-block content-text-small"
            >
              {category}
            </Link>
          </div>
        );
      })}
    </div>
  );
};
