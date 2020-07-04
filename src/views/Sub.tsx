import React from "react";
import "../assets/styles/Sub.css";
import { Title } from "../components/General/Title";

export const SubPage: React.FC = () => {
  const McDonaldsLogoUrl =
    "https://cdn.worldvectorlogo.com/logos/mcdonald-s-15.svg";
  return (
    <div className="content-container-1 transition-load">
      <div className="title-social-container" style={{ marginBottom: "50px" }}>
        <Title text="Sub benefits" style={{ marginBottom: "75px" }} />
        <div
          className="d-flex mx-auto sub-example-container"
          onContextMenu={(e) => e.preventDefault()}
          style={{ marginBottom: "75px" }}
        >
          <div className="text-center">
            <img
              className="sub-example-image blur"
              src={McDonaldsLogoUrl}
              style={{ marginBottom: "20px" }}
            />
            <div
              className="content-text"
              style={{ fontSize: "36px" }}
              aria-valuetext="PNG"
            />
          </div>
          <div className="text-center">
            <img
              className="sub-example-image"
              src={McDonaldsLogoUrl}
              style={{ marginBottom: "20px" }}
            />
            <div
              className="content-text"
              style={{ fontSize: "36px" }}
              aria-valuetext="SVG"
            />
          </div>
        </div>
        <div
          className="content-text-small about-text-container mx-auto text-left"
          style={{ marginBottom: "75px" }}
        >
          <p>
            The main advantage of the subscription is the ability to download
            logos for free in SVG format, which, unlike PNG format, does not
            spoil the quality when changing the size of the image.
          </p>
          <p>
            Without a subscription, the price of each logo is 1$. And so, paying
            once, You get a great offer: the entire gallery of logos for free!
          </p>
        </div>
        <div className="text-center">
          <div
            className="content-text "
            style={{ fontSize: "30px", marginBottom: "50px" }}
          >
            Subscribe for just <span className="gradient-text">5$</span>
          </div>
          <button
            type="button"
            className="content-btn mx-auto"
            aria-valuetext="Subscribe"
          />
        </div>
      </div>
    </div>
  );
};
