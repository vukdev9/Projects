import React, { Component } from 'react'
import './Header.css'
import { Link, withRouter } from 'react-router-dom'
import { isUserLoggedIn } from '../../services/authServices'


class Header extends Component {
  // constructor(props) {
  //     super(props);}

  render() {

    const text = isUserLoggedIn() ? (

      <div className="grey-text text-lighten-4 right" >
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/myposts">MyPosts</Link></li>
      </div>
    ) : (
        <div className="grey-text text-lighten-4 right" >
          <li><Link to="/">Posts</Link></li>
          <li><Link to="/about">About</Link></li>
        </div>)
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo crud">CRUD</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">

            {text}
          </ul>
        </div>
      </nav>
    )
  }
}
export default withRouter(Header)