import React from 'react';

import Experience from './Experience/Experience';
import Loading from '../UI/Loading/Loading';
import ReactIcons from '../common/reactIcons';

const WorkExperience = (props) => {

    const buildColumns = (col, i) => {
        let heading = (i === 0) ? 'Day-To-Day Comfort' : 'Experience with';
        return (
            <ul>
                <h3>{heading}</h3>
                {col.map(buildTech)}
            </ul>
        );
    }

    const buildTech = (tech) => {
        return (
            <li>{tech.name}</li>
        )
    }

    const buildExperiences = (exp) => {
        return (
            <div key={exp.id} className="content" >
                <Experience data={exp} />
            </div>
        );
    }

    return (
        <div className="work-experience-wrapper">
            <div className="header-container" >
                <div className="Content">
                    <div className="heading">
                        <h3>Dig a little deeper.</h3>
                    </div>
                    <div className="download">
                        <a href="https://pratik-resume.s3.amazonaws.com/PratikMathur-Resume.pdf" target="_blank" className="button">Download Resume <ReactIcons id="CustomTag" size="24" icon="BsArrowRight" /></a>
                    </div>
                </div>
            </div >

            {props.loading && <Loading />}
            <div className="Section" >
                <h2>Technologies</h2>
                <div className="content-row TechnologyRow">
                    {props.technology.map(buildColumns)}
                </div>
            </div >
            <div className="Section">
                <h2>Work Experience</h2>
                <div className="content-row">
                    {props.experience.map(buildExperiences)}
                </div>

            </div>
        </div >
    )
}

export default WorkExperience;