import React from 'react';
import classes from './ContactPageContainer.module.css';

import ContactForm from './ContactForm/ContactForm';

const ContactPageContainer = (props) => {

    return(
        <div className={classes.ContactPageContainer}>
            <div className={classes.HomepageContainer}>
                <div className={classes.title}>
                    <h3>Connect with me today.</h3>
                </div>
            </div>
            <ContactForm emailSent={props.emailSent} errors={props.errors} formControls={props.formControls} onChange={props.onChange} onClick={props.onClick} />

            <div className={classes.PhoneContainer}>
                <h1>Or reach out to me directly.</h1>
                <h3>Call 703-981-5938 Mon-Fri : 9am-5pm EST</h3>
            </div>

            <div>
            <iframe src="https://www.google.com/maps/d/embed?mid=1DQ1fZit-lxoXEQrhlvkOApGVm-0&hl=en" width="640" height="480"></iframe>
            </div>
        </div>
    )
}

export default ContactPageContainer;