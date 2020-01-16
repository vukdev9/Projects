import React from 'react'
import './button.css'

const Button = (props) => {
    return (<button className={props.className} onClick={props.onClick}> {props.title}</button>)
}

export default Button