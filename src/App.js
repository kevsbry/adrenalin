import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Listing from "./pages/Listing";
import Detail from "./pages/Datail";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Listing} />
        <Route path="/detail/:slug" component={Detail} />
      </Switch>
    </div>
  );
}

export default App;
