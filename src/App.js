import React from "react";
import "App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "pages/HomePage";
import { ConstructionPage } from "pages/ConstructionPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ConstructionPage} exact />
          <Route path="/test" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
