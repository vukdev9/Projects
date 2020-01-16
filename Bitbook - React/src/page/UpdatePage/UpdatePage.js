import React from 'react'
import {postService} from '../../services/postService'
import Title from '../../components/title/Title'
import Input from '../../components/input/Input'
import ButtonSD from '../../components/ButtonSD/ButtonSD'

class UpdatePost extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      subtitle: "",
      imageUrl: "",
      text: ""
    }
  }
  componentDidMount() {

    let token = localStorage.getItem("currentUser")

    postService.fetchSinglePost(this.props.match.params.id, token)
        .then(result => this.setState({
          title: result.title,
          subtitle: result.subtitle,
          imageUrl: result.imageUrl,
          text: result.text,
          sid: result.sid


        }))
  }
  getTitle = (x) => {
    this.setState({title: x})
  }

  getSubtitle  = (x) => {
    this.setState({ subtitle: x })
  }

  getImage = (x) => {
    this.setState({ imageUrl: x })
  }

  getText = (x) => {
    this.setState({ text: x })
  }

  updatePost = () => {
    let data = {
        sid: this.state.sid,
        title: this.state.title,
        subtitle: this.state.subtitle,
        imageUrl: this.state.image,
        text: this.state.text
    }
        let token = localStorage.getItem("token")
        postService.updatePost(this.props.match.params.id, data, token)
            .then(result => {
              setTimeout(() => {
                this.props.history.push('/myposts')
              }, 2000)
            })
        }

  deletePost = () => {
    let data = {
      sid: this.state.sid,
      title: this.state.title,
      subtitle: this.state.subtitle,
      imageUrl: this.state.image,
      text: this.state.getText
    }
    let token = localStorage.getItem("token")
    postService.deleteSinglePost(this.props.match.params.id, data, token)
        .then(result => {
          setTimeout(() => {
            this.props.history.push('/myposts')
          }, 2000);
        })
  }

  render() {

    return (
      <>
        <div>
          <Title title="Update Post" />
          <p><span>Title:</span><br />
          <Input type='text' placeholder='Enter Title' value={this.state.title} onChange={this.getTitle} />
          </p>
          <p><span>Subtitle:</span><br />
          <Input type='text' placeholder='Enter Subtitle' value={this.state.subtitle} onChange={this.getSubtitle} />
          </p>
          <p><span>Image:</span><br />
          <Input type='text' placeholder='Enter Image URL' value={this.state.imageUrl} onChange={this.getImage} />
          </p>
          <p><span>Text:</span><br />
          <Input type='text' placeholder='Enter Text Post' value={this.state.text} onChange={this.getText} />
          </p>
          <ButtonSD title="Update" onClick={this.updatePost} className="Save" />
          <ButtonSD title="Delete" onClick={this.deletePost} className="Delete" />
        </div>
      </>
    )
  }
}

export default UpdatePost
