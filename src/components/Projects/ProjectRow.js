import React from 'react';
import Project from '../Projects/Project/Project.js';
import classes from './ProjectRow.module.css';

const ProjectRow = (props) => {
    
    const buildRow = (card) => {
        return (
            <div key={card.index} className={classes.project} >
                <Project key={card.index} src={card.url} id={card.index} openModalHandler={props.openModalHandler}/>
            </div>
        );
    }

    return (
        <div className={classes.ProjectDiv}>
        
            <div className={classes.ProjectRow}>
            
                {props.projects.map(buildRow)}
            </div>
            
        </div>
    )
}

export default ProjectRow;