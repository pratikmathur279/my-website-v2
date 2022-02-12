import React from 'react';
import ReactCardFlip from 'react-card-flip';

import classes from './Projects.module.css';
import ProjectFront from './Project/ProjectFront';
import ProjectBack from './Project/ProjectBack';
// import project1 from './images/Embr.png';
// import project2 from './images/totalmortgage_website.png';
// import project3 from './images/project-3.jpg';

const projects = (props) => {

    return (
        <div className="Projects">
            <div className="ProjectDiv">
                <div className="ProjectsContainer">

                    {props.projects.map((project, index) => (

                        <ReactCardFlip isFlipped={project.isFlipped">
                    < ProjectFront key = "front" id = { project.index } mouseClick = { props.mouseClick } src = { project.url } alt = {
                        project.name"></ProjectFront>
                            <ProjectBack key = "back" id = { project.index
                    } mouseClick = { props.mouseClick } heading = { project.heading } desc = { project.description } ></ProjectBack >
            </ReactCardFlip >
                ))}

        </div >
            </div >
        </div >
    ) 
}

export default projects;