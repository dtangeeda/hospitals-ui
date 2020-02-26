import React, { Component } from "react";
import { Link } from "react-router-dom";

import "react-table/react-table.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  render() {
    return (
      <div>
        <div className="ui container" style={{ margin: "4vh 0" }}>
          <h1>Welcome to Hospital Price List</h1>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <h3>Florida</h3>
          <li>
            <Link to="/jfk-florida">
              View Prices for JFK Medical Center - Atlantis, Florida
            </Link>
          </li>
          <h3>North Carolina</h3>
          <li>
            <Link to="/duke-health">
              View Prices for Duke University Hospital -Durham, NC
            </Link>
          </li>
          <h3>Ohio</h3>
          <li>
            <Link to="/mvh-ohio">
              View Prices for Miami Valley Hospital - Ohio
            </Link>
          </li>
          <li>
            <Link to="/osu-wexner">
              View Prices for Ohio State University - Wexner
            </Link>
          </li>
          <li>
            <Link to="/nationwide-childrens">
              View Prices for Nationwide Children's Hospital Ohio
            </Link>
          </li>
          <h3>Virginia</h3>
          <li>
            <Link to="/uva-health">
              View Prices for University of Virginia Health System
            </Link>
          </li>
          <h3>Wisconsin</h3>
          <li>
            <Link to="/aurora-baycare">
              View Prices for Aurora BayCare Medical Center, Green Bay, WI
            </Link>
          </li>
        </ul>
        <hr />
      </div>
    );
  }
}
export default App;
