import React from "react";
import { Route, Switch } from "react-router-dom";
import Countries from "./Countries";
import { TestCard } from "./Components/TestCard";
import DetailCountryCard  from "./Components/DetailCountryCard/DetailCountryCard";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Countries} />
        <Route
          exact
          path={`/Test`}
          component={TestCard}
        />
        <Route path={"/DetailCard/:name"} component={DetailCountryCard} />
      </Switch>
    </div>
  );
}
export default App;
