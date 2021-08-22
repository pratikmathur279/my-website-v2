import React from 'react';
import classes from './Project.module.css';

const Project = (props) => {
    console.log(props);
    return (
        <div className={classes.project}>
            <img id={props.id} src={'./images/' + props.src} alt={props.alt}></img>
            <div className={classes.ProjectDesc}>
                <p className="desc">{props.card.description}</p>
            </div>
        </div>
    )
}

export default Project;