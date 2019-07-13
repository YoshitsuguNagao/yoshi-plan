import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';


export default class Navbar extends Component {
  render() {
    return (
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
          <Link to='/' className="brand-logo">YoshiPlan</Link>
          <SignedInLinks></SignedInLinks>
          <SignedOutLinks></SignedOutLinks>

        </div>
      </nav>
    )
  }
}
