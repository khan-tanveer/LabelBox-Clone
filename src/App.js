import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navvbar from "./components/Navvbar";
import Product from "./components/pages/Product";
import Solution from "./components/pages/Solution";
import Learn from "./components/pages/Learn";
import Pricing from "./components/pages/Pricing";
import Academic from "./components/pages/Academic";
import Company from "./components/pages/Company";

function App() {
  return (
    <div className="App">
      <Router>
        <Navvbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/solution" component={Solution} />
          <Route exact path="/learn" component={Learn} />
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/academic" component={Academic} />
          <Route exact path="/company" component={Company} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
