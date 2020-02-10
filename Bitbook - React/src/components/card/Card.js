import React from 'react'
import './Card.css'
import AuthorName from '../Author/AuthorName'


const Card = (props) => {

    return (<div className="card">
        <div className="cardText">
            <div className="card-image">
                <img className='responsive-img' src={props.src} alt={props.alt}/>
            </div>
            <div className="card-content ">
                <h6 className="card-title"> {props.title}</h6>
                <p> {props.description}</p>
                <hr></hr>
                <p>Author: <AuthorName id={props.userId} /></p>
            </div>
        </div>
    </div>)
}

export default Card