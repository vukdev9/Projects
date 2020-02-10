import React from "react";
import Title from "../../components/title/Title"
import './MyPost.css'
import MyPosts from "./MyPosts";
import { Link } from 'react-router-dom'


const MyPostLanding = () => (
    <div className="container">
        
        <Title title="My Posts" />

        <MyPosts />

        <Link to='/createpost' className="waves-effect waves-light btn newPost">
            CREATE NEW POST
        </Link>

    </div>
);

export default MyPostLanding