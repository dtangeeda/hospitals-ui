import React, { Component } from 'react';
import ReactTable from 'react-table';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import "react-table/react-table.css";

class App extends Component {
  constructor( props ) {
     super( props );
     this.state = {
       posts: []
     }
   }

  componentDidMount() {
    const url = 'http://localhost:3005/api/getPrices/aurorabaycare';    
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
    const tableData1 = this.state.posts;
    const columns = [{
        Header: 'Service',
        accessor: 'service'
      },
      {
        Header: 'Billing Term',
        accessor: 'billing_term'
      },
      {
        Header: 'Price',
        accessor: 'price'
      },
      {
        Header: 'Service Type',
        accessor: 'service_type'
      }
    ]
    /*
    return(<ReactTable
      columns={columns}
      data={this.state.posts}>
      </ReactTable>
      );
      
      */

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
        <Route path="/aurora-baycare" component={aurora_baycare} />
        <Route path="/mvh-ohio" component={mvh_ohio} />
        <Route path="/osu-wexner" component={osu_wexner} />
      </div>
    </Router>
    );
    
    function Home() {
      return (
      <div className="ui container">
      </div>);
    }

    function aurora_baycare() {
      return(<ReactTable
        columns={columns}
        data={tableData1}>
        </ReactTable>
        );
    }

    function mvh_ohio() {
      return(<ReactTable
        columns={columns}
        data={tableData1}>
        </ReactTable>
        );
    }

    
    function osu_wexner() {
      return(<ReactTable
        columns={columns}
        data={tableData1}>
        </ReactTable>
        );
    }    
    }
  }
export default App;