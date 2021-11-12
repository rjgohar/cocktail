import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { React, useState } from "react";
import Header from "../Header";
import Home from "../Home";
import About from "../About";
import CardDetails from "../CardDetails";
import Data from "../Data";

const Routes = () => {
  const [detail, setdetail] = useState(Data[0]);

  return (
    <>
      <BrowserRouter>
        <Header />

        <Switch>
          <Route
            path="/home"
            component={() => {
              return <Home setdetail={setdetail} />;
            }}
          />
          <Route path="/About" component={About} />
          <Route
            path="/card-detail"
            exact
            component={() => <CardDetails detail={detail} />}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;
