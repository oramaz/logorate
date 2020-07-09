import React from "react";
import { EmailInputIcon } from "../../assets/images/Icons";
import { Title } from "../../components/General/Title";
import { useHistory } from "react-router-dom";

export const PasswordRecovery: React.FC = () => {
  const history = useHistory()
  if (sessionStorage.getItem("token")) {
    history.push("/")
  }

  return (
    <div className="content-container-1 transition-load">
      <div className="title-social-container" style={{ marginBottom: "50px" }}>
        <Title text="Password recovery" style={{ marginBottom: "30px" }} />
        <div className="content-text-small mx-auto text-center">
          <div>Enter Your email address and we will send you</div>instructions
          for password recovery
        </div>
      </div>
      <div className="content-form-container mx-auto">
        <form>
          <div
            className="content-input-container"
            style={{ marginBottom: "50px" }}
          >
            <span className="input-icon">
              <EmailInputIcon />
            </span>
            <input
              type="email"
              name="email"
              required
              className="content-input"
              placeholder="Email"
            />
          </div>
          <div className="d-flex">
            <button
              type="submit"
              className="content-btn mx-auto"
              aria-valuetext="Recover"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
