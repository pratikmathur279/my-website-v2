import React from 'react';
import classes from './Project.module.css';

const Project = ( props ) => {
    return(
        <div className={classes.project} onClick={props.openModalHandler.bind(null, props.id)}>
            <img id={props.id} src={'./images/'+ props.src} alt={props.alt}></img>
        </div>
    )        
}

export default Project;