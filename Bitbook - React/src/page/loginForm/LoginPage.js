import React from 'react'
import Input from '../../components/input/Input'
import Button from '../../components/button/Button'
import Checkbox from '../../components/checkbox/Checkbox'
import Title from '../../components/title/Title'
import Icon from '../../components/icon/Icon'
import { Row } from '../../components/Row/Row'
import { Link } from 'react-router-dom'
import './login.scss'
import { sendLoginData } from '../../services/authServices'

class LoginPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      errorMsg: "",
      checkbox: false

    }
  }

  loginHandler = event => {
    event.preventDefault();

    const { email, password } = this.state;
    const content = {
      email: email,
      password: password
    };

    this.sendLoginForm(content);
  };

  resetLoginForm = () => {
    this.setState({
      email: "",
      password: "",
      errorMsg: ""
    });
  };

  goToHomepage = () => this.props.history.push("/dashboard");

  sendLoginForm = data => {
    sendLoginData(data)
      .then(({ error }) => {
        if (error) {
          return this.setState({ errorMsg: error.message });
        }
        this.resetLoginForm();
        this.goToHomepage();
      });
  };

  getEmail = (x) => {
    this.setState({email: x})
  }

  getPassword = (x) => {
    this.setState({password: x})
  }



  render() {
    const { errorMsg } = this.state;
    return (
      <div className='container'>

        <form className='col s12'>
          <div className='wraper RegistrationForm'>
            <Icon className='lockLogo' />
            <Title title="Sign In" className="title" />
            <Row >
              <Input name="email" type="text" placeholder="Email Address*" className="input" required onChange={this.getEmail} />
              <Input name="password" type="password" placeholder="Password*" className='input' required onChange={this.getPassword} />
            </Row>
            <Checkbox onChange={(d) => console.log(d)} label="Remember me" />

            <Button title='Sign In' type="submit" onClick={this.loginHandler} name="action" />
            <Row >
              <a className="col 4">Forgot password?</a>
              <span className="col 4 offset-md-4"><Link to='/sign-up'>Don't have an account? Sign Up</Link></span>
              <p className="red-text">{errorMsg} </p>
            </Row>

          </div>
        </form>
      </div>
    )
  }
}

export default LoginPage