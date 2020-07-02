import React from 'react';

import classes from './Education.module.css';

const Experience = ( props ) => {

    return(
        <div className={classes.Section}>
                <h2>Education</h2>
                <div className={classes.EducationRow}>
                    <div className={classes.Education}>
                        <h3>Masters of Science in Information Sciences</h3>
                        <div className={classes.container}>
                            <p>George Mason University, Fairfax, VA, August 2015 – May 2017</p>
                        </div>
                    </div>
                    <div className={classes.Education}>
                        <h3>Bachelor of Technology in Computer Science</h3>
                        <div className={classes.container}>
                            <p>Jawaharlal Nehru Technological University, Hyderabad, Telangana, India, July 2011 – June 2015</p>
                        </div>
                    </div>
                    
                </div>

            </div>
    )
}
    

export default Experience;