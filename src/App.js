import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Doritos from "./Doritos";
import Sprite from "./Sprite";
import Snickers from "./Snickers";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact render={() => <VendingMachine />} />
        <Route path="/doritos" render={() => <Doritos />} />
        <Route path="/sprite" render={() => <Sprite />} />
        <Route path="/snickers" render={() => <Snickers />} />
      </Router>
    </div>
  );
}

export default App;
