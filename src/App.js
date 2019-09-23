import React from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Details from "./components/Details/Details";
import "./App.css";

function App() {
  let routes = (
    <Switch>
      <Route path="/services/:details" component={Details} />
      <Route path="/services" component={Services} />
      <Route path="/" component={Home} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
