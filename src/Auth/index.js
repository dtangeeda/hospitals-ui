import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Aurora_Bay_Care } from "../places/aurorBayCare";
import { MVH_Ohio } from "../places/mvhOhio";
import { JFK_Florida } from "../places/jfkFlorida";
import { Duke_Health } from "../places/dukehealth";
import { Osu_Wexner } from "../places/osuwexner";
import { UVa_Health } from "../places/uvahealth";
import { Nationwide_Child } from "../places/nationwidechild";
import App from "../App";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/aurora-baycare" component={Aurora_Bay_Care} />
          <Route path="/jfk-florida" component={JFK_Florida} />
          <Route path="/duke-health" component={Duke_Health} />
          <Route path="/mvh-ohio" component={MVH_Ohio} />
          <Route path="/osu-wexner" component={Osu_Wexner} />
          <Route path="/nationwide-childrens" component={Nationwide_Child} />
          <Route path="/uva-health" component={UVa_Health} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
