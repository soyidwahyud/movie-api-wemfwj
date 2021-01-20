import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";
import Data from "./Data";
import AdditionalInfo from "./AdditionalInfo";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Index extends Component {
  render() {
    return (
      <div>
        <Data />
      </div>
    );
  }
}

class MovieInfo extends Component {
  render() {
    const { id } = this.props.match.params;
    return (
      <div>
        <AdditionalInfo id={id} />
      </div>
    );
  }
}

class Users extends Component {
  render() {
    return (
      <div>
        <h1>User</h1>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Index} />
          <Route path="/movieInfo/:id" exact component={MovieInfo} />
          <Route path="/users/" component={Users} />
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById("root"));
