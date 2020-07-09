import React from "react";
import "../assets/styles/App.css";
import { BrowserRouter, useHistory } from "react-router-dom";
import Routes from "../routes";
import Logos from "../assets/logos.json";
import { Logo } from "../models/Logo";

const WebPBrowserSupport = () => {
  const elem = document.createElement('canvas');

  if (!!elem.getContext && elem.getContext('2d')) {
    // was able or not to get WebP representation
    return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
  }

  // very old browser like IE 8, canvas not supported
  return false;
}

export const WebPSupport = React.createContext(true);
export const LogosContext = React.createContext([] as Logo[]);

const App: React.FC = () => {

  return (
    <WebPSupport.Provider value={WebPBrowserSupport()}>
      <LogosContext.Provider value={Logos as Logo[]}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </LogosContext.Provider>
    </WebPSupport.Provider>

  );
};

export default App;
