import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { isUserLoggedIn } from '../../services/authServices'
import { logOut } from '../../services/authServices'
import './footer.css'

class Footer extends React.Component {

  onLogout = event => {
    event.preventDefault();
    logOut();
    this.props.history.push("/");
  };

  render() {
    const text = isUserLoggedIn() ? (
        <Link to='/sing-in' onClick={this.onLogout} className="grey-text text-lighten-4 right footer-sing">
          SignOut
        </Link>
    ) : (
          <Link to='/sing-in' className="grey-text text-lighten-4 right footer-sing">
            Sign In
          </Link>
      )
    return (
      <footer className="page-footer">
        <div className="footer-copyright">
          <div className="container">
            © 2019 BIT
          {text}
          </div>
        </div>
      </footer>
    )
  }
}
export default withRouter(Footer)