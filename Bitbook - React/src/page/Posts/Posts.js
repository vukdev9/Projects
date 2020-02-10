import React from 'react'
import Card from '../../components/card/Card'
import Title from '../../components/title/Title'
import { postService } from '../../services/postService'


class Posts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        postService.getPosts()
            .then((posts) => {
                this.setState({ posts })
            })
    }

    render() {

        return (
            <>
                <Title title='All posts' />
                <div className='row'>
                    {this.state.posts.map((post) => {
                        return <Card userId={post.userId} key={post.id} title={post.title} src={post.validImage} description={post.text} id={post.id} />
                    })}
                </div>
            </>
        )
    }
}
export default Posts