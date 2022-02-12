import React from 'react';
import classes from './ProjectFront.module.css';

const projectFront = (props) => (
    <div className="project">
        <img id={props.id} onClick={props.mouseClick}
            onMouseOut={props.mouseOut}
            src={props.src}
            alt={props.alt"></img>
    </div >
);

export default projectFront;