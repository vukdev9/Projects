import React from 'react'

const ButtonSD = (props) => {
  return (
    <>
      <button className={props.className} onClick={props.onClick}>{props.title}</button>
    </>
  )
}
export default ButtonSD