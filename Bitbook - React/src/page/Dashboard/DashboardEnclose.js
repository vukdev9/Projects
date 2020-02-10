import React from "react";

const DashboardEnclose = (props) => (
  <>
    <div className='dashBord'>
      <div >
        <img src={props.src} alt={props.alt}></img>
      </div>
      <p>{props.number}</p>
      <p>{props.text}</p>
    </div>
  </>
)

export default DashboardEnclose;