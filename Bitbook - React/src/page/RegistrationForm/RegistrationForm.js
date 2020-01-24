import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/button/Button'
import Input from '../../components/input/Input'
import Checkbox from '../../components/checkbox/Checkbox'
import Icon from '../../components/icon/Icon'
import Title from '../../components/title/Title'
import { Row } from '../../components/Row/Row'
import "./RegistrationForm.scss";
import { http } from '../../services/fetchService'
import { registerEndpoint } from '../../shared/constants'

class RegistrationForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: null,
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            error: ''
        }
    }

    onNameChange = (event) => this.setState({ firstName: event })

   onLastnameChange = (event) => this.setState({ lastName: event })

   onEmailChange = (event) => this.setState({ email: event})

   onPasswordChange = (event) => this.setState({ password: event })



    onSubmit = () => {
        http.post(registerEndpoint, {
            name: this.state.firstName + this.state.lastName,
            email: this.state.email,
            password: this.state.password
        }, )
            .then(() => this.props.history.push('/login'))
            .catch(error => this.setState({ error: error.message }))
    }

    render() {
        return (
            <>
                <div className='wraper RegistrationForm'>
                    <Icon className='lockLogo' />
                    <Title title='Sign Up' className='title' />

                    <Row>
                        <Input name='firstName' type='text' placeholder='First Name *' className='col s6 RegistrationForm__splitter input' onChange={this.onNameChange} />
                        < Input name='lastName' type='text' placeholder='Last Name *' className='col s6 input' onChange={this.onLastnameChange} value={this.props.state} />
                    </Row>

                    <Row>
                        <Input name='email' type='text' placeholder='Email Address *' className='input' onChange={this.onEmailChange} value={this.props.state} />
                        <Input name='password' type='password' placeholder='Password *' className='input last' onChange={this.onPasswordChange} value={this.props.state} />
                        <Checkbox label="I want to receive inspiration, marketing promotions and update via email." />
                        <Button title='Sign Up' onClick={this.onSubmit} />
                        <span className='span'><Link to='/sign-in'>Already have an account? Sign in</Link></span>
                    </Row>
                </div>
            </>
        )
    }
}
export default RegistrationForm         

