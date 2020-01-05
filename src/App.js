import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import "react-table/react-table.css";
import { Aurora_Bay_Care } from './aurorBayCare';
import { MVH_Ohio } from './mvhOhio';
import { Osu_Wexner } from './osuwexner';

class App extends Component {
  constructor( props ) {
     super( props );
     this.state = {
       posts: []
     }
   }

  componentDidMount() {
    const url = 'http://localhost:8080/api/getPrices/aurorabaycare';    
    // 'http://localhost:3005/api/getPrices/osuwexner'
    // 'http://localhost:3005/api/getPrices/mvhohio';
    fetch(url)
    .then(res => res.json())
    .then((data) => {
      //console.log("posts", data)
      this.setState({ posts : data })
    })    
  }

  render() {
    return (
      <Router>
      <div>
      <div className="ui container" style={{ margin: '4vh 0' }}>
        <h1>Welcome to Hospital Price List!</h1>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <h3>Wisconsin</h3>
          <li>
            <Link to="/aurora-baycare">View Prices for Aurora-Baycare</Link>
          </li>
          <h3>Ohio</h3>
          <li>
            <Link to="/mvh-ohio">View Prices for Miam Valley Hospital - Ohio</Link>
          </li>
          <li>
            <Link to="/osu-wexner">View Prices for Ohio State University - Wexner</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/aurora-baycare" component={Aurora_Bay_Care} />
        <Route path="/mvh-ohio" component={MVH_Ohio} />
        <Route path="/osu-wexner" component={Osu_Wexner} />
      </div>
    </Router>
    );
    
    function Home() {
      return (
      <div className="ui container">
      </div>);
    }

    }
  }
export default App;