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
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d749.5506489512185!2d-72.88084517076615!3d41.282695006495864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE2JzU3LjciTiA3MsKwNTInNDkuMSJX!5e0!3m2!1sen!2sus!4v1592182075782!5m2!1sen!2sus" width="800" height="600" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> */}
            </div>
        </div>
    )
}

export default ContactPageContainer;