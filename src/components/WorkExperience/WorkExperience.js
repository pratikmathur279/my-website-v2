import React from 'react';

import classes from './WorkExperience.module.css';
import Experience from './Experience/Experience';
import Loading from '../UI/Loading/Loading';

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
        return(
            <li>{tech.name}</li>
        )
    }

    const buildExperiences = (exp) => {
        return (
            <div key={exp.id} className={classes.experience} >
                <Experience data={exp} />
            </div>
        );
    }

    return (
        <div className={classes.WorkExperience}>
            <div className={classes.Container}>
                <div className={classes.Content}>
                    <div className={classes.heading}>
                        <h3>Dig a little deeper.</h3>
                    </div>
                    <div className={classes.download}>
                        <a href="https://pratik-resume.s3.amazonaws.com/PratikMathur-Resume.pdf" target="_blank" className={classes.button}>Download Resume →</a>
                    </div>
                </div>

            </div>
            {props.loading && <Loading />}
            <div className={classes.Section}>
                <h2>Technologies</h2>
                <div className={classes.TechnologyRow}>
                    {props.technology.map(buildColumns)}
                </div>
            </div>
            <div className={classes.Section}>
                <h2>Work Experience</h2>
                <div className={classes.WorkExperienceRow}>
                    {props.experience.map(buildExperiences)}
                </div>

            </div>
        </div>
    )
}

export default WorkExperience;