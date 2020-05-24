import React from "react";
import "./App.css";
import { Route, Switch, HashRouter } from "react-router-dom";
import Listing from "./pages/Listing";
import Detail from "./pages/Datail";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Listing} />
          <Route path="/detail/:slug" component={Detail} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
