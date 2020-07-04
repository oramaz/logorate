import React from "react";
import "../../assets/styles/404.css";
import { useHistory } from "react-router";

export const NotFoundPage: React.FC = () => {
  const history = useHistory();

  return (
    <div className="content-container-1">
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404" />
          <h1>404</h1>
          <h2>Oops! Page Not Be Found</h2>
          <a
            style={{ marginTop: "20px", cursor: "pointer" }}
            onClick={() => {
              history.push("/");
            }}
          >
            Back to homepage
          </a>
        </div>
      </div>
    </div>
  );
};
