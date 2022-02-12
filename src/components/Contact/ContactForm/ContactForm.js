import React from 'react';

import TextInput from '../../UI/TextInput/TextInput';
import TextArea from '../../UI/TextArea/TextArea';

import {
    GoogleReCaptchaProvider,
    useGoogleReCaptcha
} from 'react-google-recaptcha-v3';

const ContactForm = (props) => {
    const YourReCaptchaComponent = () => {
        const { executeRecaptcha } = useGoogleReCaptcha();
        const token = executeRecaptcha("contact_page");

        return null;
    }

    return (
        <div className="ContactForm">
            <div className="contact-left-container">
                <h1>Let's talk.</h1>
                <h3>Have a question or want to work together? Fill in the form below and I'll get back to you as soon as possible.</h3>
                <h2 className="email"><a href="mailto:pratikmathur279@gmail.com">pratikmathur279@gmail.com</a></h2>
                <h2>Phone: 703-981-5938 </h2>

                <div className="map-container">
                    <iframe src="https://www.google.com/maps/d/embed?mid=1DQ1fZit-lxoXEQrhlvkOApGVm-0&hl=en&ehbc=2E312F"></iframe>
                </div>
            </div>

            <div className="contact-right-container">
                <h3>Have a question or want to work together? Fill in the form below and I'll get back to you as soon as possible.</h3>
                {props.emailSent ? <p className="EmailSent"> Email sent!</p > : ""}
                <div className="Form">
                    <form>
                        <TextInput errors={props.errors} onChange={props.onChange} id="name" name="name" placeholder="Enter your full name" value={props.formControls.name.value} />
                        <TextInput errors={props.errors} onChange={props.onChange} id="email" name="email" placeholder="Enter your email address" value={props.formControls.email.value} />
                        <TextInput errors={props.errors} onChange={props.onChange} id="subject" name="subject" placeholder="Please enter a subject" value={props.formControls.subject.value} />
                        <TextArea errors={props.errors} onChange={props.onChange} name="message" placeholder="Enter message" value={props.formControls.message.value} />

                        {/* <GoogleReCaptchaProvider reCaptchaKey="6LeAWrAZAAAAAFASPD_vO5-BxWMVItw0hISUJO2L">
                        <YourReCaptchaComponent />
                    </GoogleReCaptchaProvider> */}
                        <button type="button" onClick={props.onClick}>Send!</button>
                    </form >
                </div>
            </div>
        </div >
    )
}

export default ContactForm;