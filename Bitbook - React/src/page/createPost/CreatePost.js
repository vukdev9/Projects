import React from 'react'
import Input from '../../components/input/Input'
import TextArea from '../../components/textArea/TextArea'
import './CreatePost.css'
import {postService} from '../../services/postService'
import ButtonSD from '../../components/ButtonSD/ButtonSD'
import Title from '../../components/title/Title'

class CreatePost extends React.Component {

    state = {
        title: '',
        subtitle: '',
        image: '',
        text: ''
    }

    getTitle = (x) => {
        this.setState({ title: x })
    }

    getSubtitle = (x) => {
        this.setState({ subtitle: x })
    }

    getImage = (x) => {
        this.setState({ image: x })
    }

    getText = (x) => {
        this.setState({ text: x })
    }

    saveClick = () => {
        const data = {
            isPublic: true,
            title: this.state.title,
            subtitle: this.state.subtitle,
            imageUrl: this.state.image,
            text: this.state.text
        }
        let token = localStorage.getItem("token")
        postService.createPost(data, token)
            .then(() => {
                setTimeout(() => this.props.history.push("/myposts"), 2000)
            })
    }

    deletePost = () => {
        let data = {}
        let token = localStorage.getItem("token")
        postService.deleteSinglePost(this.props.match.params.id, data, token)
        this.props.history.push('/myposts')
    }

    render() {
        return (
        <> 
        <div className='createwraper'>
            <Title title="Create Post" />
            <Input onChange={this.getTitle} name='title' type='text' placeholder='Title' className='halfInpOne' />
            <Input onChange={this.getSubtitle} name='subtitle' type='text' placeholder='Subtitle' className='halfInpTwo' />
            <Input onChange={this.getImage} name='imageUrl' type='text' placeholder='Image URL' className='' />
            <TextArea placeholder='Textarea' onChange={this.getText} name='text' className= ''/> 
            <ButtonSD title='Save' onClick={this.saveClick} className='Save'  /> 
            <ButtonSD title='Delete' className='Delete' onChange={this.deletePost} />
        </div> 
        </>)
    }
}

export default CreatePost