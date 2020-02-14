import React from "react";
import { Link } from 'react-router-dom';

// import faStyles from 'font-awesome/css/font-awesome.css'
function Home() {
    return (
  <div>
<div className="ui container"  style={{ margin: '4vh 0', padding:"0 30px" }}>
  <h1>  Welcome to Hospital Price List!</h1>
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

</div>
  
    )
}

export default Home; 