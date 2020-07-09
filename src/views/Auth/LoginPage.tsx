import React from "react";
import { LoginForm } from "../../components/Auth/LoginForm";
import { useHistory } from "react-router-dom";

export const LoginPage: React.FC = () => {
  const history = useHistory()
  if (sessionStorage.getItem("token")) {
    history.push("/")
  }

  return (
    <div className="content-container-1 transition-load">
      <LoginForm />
    </div>
  );
};
