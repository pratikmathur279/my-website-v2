import React from 'react';

import classes from './Certifications.module.css';

const Certifications = ( props ) => {

    return(
        <div className={classes.Section}>
                <h2>Certifications</h2>
                <div className={classes.CertificationsRow}>
                    <div className={classes.Certifications}>
                        <h3>AWS Certified Developer Associate</h3>
                        <div className={classes.container}>
                            <p>Validity: Aug 2019 - Aug 2021</p>
                        </div>
                    </div>
                    <div className={classes.Certifications}>
                        <h3>IBM Certified Java Programmer - Enterprise Applications for Cloud Environment (J2EE)</h3>
                        <div className={classes.container}>
                            <p>Issue Date: Feb 2014</p>
                            <p>Credential ID: RTN164/RAD1/47</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}
    

export default Certifications;