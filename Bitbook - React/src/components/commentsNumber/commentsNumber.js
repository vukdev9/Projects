import React from 'react'
import { commentsService } from '../../services/commentsService'

class CommentNumbers extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            authorName: '',
            totalComments: []
        }
    }

    componentDidMount() {
        commentsService.getPostComments(this.props.id)
            .then(totalComments => {
                this.setState({ totalComments })
            })
    }

    render() {
        return (
            <span>{this.state.totalComments.length}</span>
        )
    }
}
export default CommentNumbers