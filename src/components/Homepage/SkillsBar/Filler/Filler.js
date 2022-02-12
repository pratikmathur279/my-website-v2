import React from 'react';

const Filler = (props) => (
    <div className="Filler" style={{ width: `${props.skill.percentage}% ` }} >
        <span value={props.skill.name}></span >
        <span value={props.skill.percentage} ></span >
    </ div >

)

export default Filler;