import React from "react";
import "../assets/styles/App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "../routes";
import Logos from "../assets/logos.json";
import { Logo } from "../models/Logo";

export const LogosContext = React.createContext([] as Logo[]);

const App: React.FC = () => {
  return (
    <LogosContext.Provider value={Logos as Logo[]}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </LogosContext.Provider>
  );
};

export default App;
