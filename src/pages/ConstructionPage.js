import React from "react";
import hairdresser from "assets/hairdresser.png";
import { Link } from "react-router-dom";

export const ConstructionPage = () => {
  return (
    <>
      <Link to="/test">
        <img src={hairdresser} className="App-logo" alt="logo" />
      </Link>
      <h2>Strona w przebudowie</h2>
      <h3>www.salonjulia.pl</h3>
    </>
  );
};
