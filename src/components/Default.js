import React, {Component} from 'react'
import {Link} from "react-router-dom"
export default class Default extends Component {
  render() {
    console.log(this.props);
  return (
    <div className="container">
    <div className="row">
    <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
    <h1 className="display-3">404</h1>
    <h1>Error</h1>
    <h2>Page not found</h2>
    <h3>The requested URL was not found
    <span className="text-danger">
    {this.props.location.pathname}
    </span>{" "}
    was not found
    </h3>
    <Link to="/">
        <button className="btn btn-primary">Home</button>
        </Link>
    </div>

    </div>
    </div>

  );
  }
}
