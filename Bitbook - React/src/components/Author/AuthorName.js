import React from 'react'
import { userService } from '../../services/userService'

class AuthorName extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            authorName: ''
        }
    }
    componentDidMount() {
        userService.getSingleAuthor(this.props.id)
            .then(authorName => this.setState({ authorName }))
    }
    render() {
        return (
            <span>{this.state.authorName}</span>
        )
    }
}
export default AuthorName