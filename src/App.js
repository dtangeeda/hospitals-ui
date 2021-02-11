import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { About } from "./components/About";
import Home from "./components/Home";
import { Contact } from "./components/Contact";
import Blog from "./components/Blog";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    const url = "do not need"; //'http://localhost:8080/api/getPrices/aurorabaycare';
    // 'http://localhost:3005/api/getPrices/osuwexner'
    // 'http://localhost:3005/api/getPrices/mvhohio';
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        //console.log("posts", data)
        this.setState({ posts: data });
      });
  }

  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Blog" component={Blog} />
            <Route path="/Contact" component={Contact} />
            <Route render={() => <h1>No Match</h1>} />
          </Switch>
        </Router>
      </>  
    );
  }
}
export default App;
