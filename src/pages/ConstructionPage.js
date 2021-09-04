import React from "react";
import hairdresser from "assets/hairdresser.png";
import { Redirect } from "react-router";

export const ConstructionPage = () => {
  return (
    <>
      <div onClick={() => <Redirect to="/test" />}>
        <img src={hairdresser} className="App-logo" alt="logo" />
      </div>
      <h2>Strona w przebudowie</h2>
      <h3>www.salonjulia.pl</h3>
    </>
  );
};
