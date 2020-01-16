import React from 'react'
import './MyPost.css'
import {Link} from 'react-router-dom'


const MyPostCard = (props) => {

    const id = props.postId

    return (
        <>
            <li className='userCards'>{props.title}  <Link to={`/updatepost/${id}`}><i className="material-icons editButton">edit</i></Link>
            </li>
        </>
    )

}

export default MyPostCard