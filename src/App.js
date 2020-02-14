import React, { Component } from 'react';
import Home from "./home"
// import ReactTable from 'react-table';
import auroraBaycare from "./aurora-baycare";
import mvhohio from "./mvh_ohio";
import osuwexner from "./osu-wexner";
import { BrowserRouter as Router, Route} from 'react-router-dom';

import "react-table/react-table.css";

class App extends Component {
 
  render() {
    

    return (
      <Router>
     <Route exact path="/" component={Home} />
      <Route path="/aurora-baycare" component={auroraBaycare} />
      <Route path="/mvh-ohio" component={mvhohio} />
      <Route path="/osu-wexner" component={osuwexner} />
        </Router>
    );
    
  

    }
  }
export default App;