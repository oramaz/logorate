import React from "react";
import "../../assets/styles/App.css";

type Props = {
  logoUrl: string;
  name: string;
};

export const LogoBlockLg: React.FC<Props> = (props) => {
  const { logoUrl, name } = props;
  // onContextMenu={(e) => e.preventDefault()}
  return (
    <div className="logo-big-container" style={{ marginBottom: "10px" }}>
      <div className=" gradient-border">
        <div style={{ padding: "77px 80px" }}>
          <img src={logoUrl} width="270px" height="300px" alt={name} />
        </div>
      </div>
    </div>
  );
};
