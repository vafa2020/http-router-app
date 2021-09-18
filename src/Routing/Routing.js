import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import { Routs } from "./Routs";

const Routing = () => {
  return (
    <Layout>
      <Switch>
        {Routs.map((Routs) => (
          <Route {...Routs} />
        ))}
      </Switch>
    </Layout>
  );
};

export default Routing;
