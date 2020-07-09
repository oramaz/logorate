import React from "react";
import { EmailInputIcon, PwdInputIcon } from "../../assets/images/Icons";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../utils/urls";
import { Title } from "../../components/General/Title";

export const SignupPage: React.FC = () => {
  const history = useHistory();
  if (sessionStorage.getItem("token")) {
    history.push("/")
  }

  const handleSignup = async (e: any) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const password2 = e.target.elements.password2.value;

    if (email && password && password === password2) {
      const res = await axios.post(
        `${API_URL}/users/register`,
        {
          email: email,
          password: password,
          password_confirm: password2,
        },
        {
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res);
    }
  };

  return (
    <div className="content-container-1 transition-load">
      <Title text="Sign up" style={{ marginBottom: "30px" }} />
      <div
        className="content-form-container mx-auto"
        style={{ marginBottom: "30px" }}
      >
        <form onSubmit={(e) => handleSignup(e)} method={"POST"}>
          <div
            className="content-input-container"
            style={{ marginBottom: "32px" }}
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
              title="email"
            />
          </div>
          <div
            className="content-input-container"
            style={{ marginBottom: "32px" }}
          >
            <span className="input-icon">
              <PwdInputIcon />
            </span>
            <input
              type="password"
              name="password"
              required
              className="content-input"
              placeholder="Password"
            />
          </div>
          <div
            className="content-input-container"
            style={{ marginBottom: "50px" }}
          >
            <span className="input-icon">
              <PwdInputIcon />
            </span>
            <input
              type="password"
              name="password2"
              required
              className="content-input"
              placeholder="Confirm the password"
            />
          </div>
          <div className="d-flex">
            <button
              type="submit"
              className="content-btn mx-auto"
              aria-valuetext="Let's go!"
            />
          </div>
        </form>
      </div>
      <div className="d-flex">
        <div className="mx-auto content-text">
          Already have an account?
          <span
            style={{ marginLeft: "10px" }}
            className="content-text-link"
            onClick={() => {
              history.push("/login");
            }}
          >
            Log in!
          </span>
        </div>
      </div>
    </div>
  );
};
