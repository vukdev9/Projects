import React from 'react'

const Checkbox = (props) => {

    const onChangeHandler = (e) => {
        props.onChange(e.target.checked)
    }
    return (
        <input type="checkbox" checked={props.checked} className={props.nameClass} onChange={onChangeHandler} ></input>
    )
}

export default Checkbox