import React from 'react'
import './TextArea.css'

const TextArea = (props) => {
    const onChangeHandler = (e) => {
        props.onChange(e.target.value)
    }
    return (
        <textarea
            name={props.name}
            value={props.value}
            placeholder={props.placeholder} 
            onChange={onChangeHandler}
            className="textArea"></textarea>
    )
}

export default TextArea