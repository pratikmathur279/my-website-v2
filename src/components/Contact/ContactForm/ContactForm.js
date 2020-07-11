import React from 'react';
import classes from './ContactForm.module.css';

import TextInput from '../../UI/TextInput/TextInput';
import TextArea from '../../UI/TextArea/TextArea';

import {
    GoogleReCaptchaProvider,
    useGoogleReCaptcha
  } from 'react-google-recaptcha-v3';

const ContactForm = (props) => {
    // console.log(props);
    const YourReCaptchaComponent  = () => {
        const { executeRecaptcha } = useGoogleReCaptcha();
        const token = executeRecaptcha("contact_page");
        
        return null;
      }

    return(
        <div className={classes.ContactForm}>
            <h3>Have a question or want to work together? Fill in the form below and I'll get back to you as soon as possible.</h3>
            {props.emailSent ? <p className={classes.EmailSent}>Email sent!</p>: ""}
            <div className={classes.Form}>
                <form>
                    <TextInput errors={props.errors} onChange={props.onChange} id="name" name="name" value={props.formControls.name.value} />
                    <TextInput errors={props.errors} onChange={props.onChange} id="email" name="email" value={props.formControls.email.value} />
                    <TextInput errors={props.errors} onChange={props.onChange} id="subject" name="subject" value={props.formControls.subject.value} />
                    <TextArea errors={props.errors} onChange={props.onChange} name="message" value={props.formControls.message.value} />

                    <GoogleReCaptchaProvider reCaptchaKey="6LeAWrAZAAAAAFASPD_vO5-BxWMVItw0hISUJO2L">
                        <YourReCaptchaComponent />
                    </GoogleReCaptchaProvider>
                    <button type="button" onClick={props.onClick}>Send!</button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm;