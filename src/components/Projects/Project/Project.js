import React from 'react';

const Project = (props) => {
    return (
        <div className="project">
            <img className='project-thumb' id={props.id} src={'./images/' + props.src} alt={props.alt}></img>
            <div className="ProjectDesc">
                <p className="desc">{props.card.description}</p>
            </div >
        </div >
    )
}

export default Project;