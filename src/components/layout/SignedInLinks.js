import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from "../../store/actions/authActions";

class SignedInLinks extends Component {
  render() {
    return (
      <ul className="right">
        <li><NavLink to='/create'>New Project</NavLink></li>
        <li><a onClick={() => {this.props.sighOut()} }>Log Out</a></li>
        <li><NavLink to='/' className="btn btn-floating pink lighten-1">YN</NavLink></li>
      </ul>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sighOut: () => dispatch(signOut())
  }
}



export default connect(null, mapDispatchToProps)(SignedInLinks)