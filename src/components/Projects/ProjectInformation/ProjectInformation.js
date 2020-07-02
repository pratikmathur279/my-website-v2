import React from 'react';
import classes from './ProjectInformation.module.css';

const ProjectInformation = ( props ) => {

    let url = props.card.url;
    return(
        <div className={classes.ProjectInformation}>
        <img id={props.card.index}
            src={'./images/'+props.card.url}
            alt={props.card.name}></img>
        <div className={classes.projectBody}>
            <h2>{props.card.name}</h2>
            <p>{props.card.description}</p>
            {props.card.github ? <p>To view the source code, <a href={props.card.github} target="_blank">click here</a></p> : ""}
            {props.card.live_instance ? <p><a href={props.card.live_instance} target="_blank">Click here</a> to play the game!</p>: ""}
            
        </div>
        
    </div>

    )    
}

export default ProjectInformation;