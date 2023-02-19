import React from 'react';

const Project = (props) => {
    return (
        <div className="project flip-card-wrapper" onClick={()=>{ props.toggleModal(props.id)}}>
            <div className='flip-card-inner'>
                <div className='flip-card-front'>
                    <img className='project-thumb' id={props.id} src={'./images/' + props.src} alt={props.alt}></img>
                </div>
                <div className='flip-card-back'>
                    <div className="ProjectDesc">
                        <p className="desc">{props.card.description}</p>
                    </div >
                </div>
            </div>
        </div>
    )
}

export default Project;