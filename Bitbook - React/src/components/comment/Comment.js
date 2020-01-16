import React from 'react'
import { commentsService } from '../../services/commentsService'


class Comments extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: []
        }
    }
    componentDidMount() {
        commentsService.getPostComments(this.props.postId)
            .then((comments) => {
                this.setState({ comments })
            })
    }
    render() {
        return (
            <>
                <span>Comments:{this.state.comments}</span>
            </>
        )
    }
}
export default Comments