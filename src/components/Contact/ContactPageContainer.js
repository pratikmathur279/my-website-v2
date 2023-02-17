import React from 'react';

import ContactForm from './ContactForm/ContactForm';

const ContactPageContainer = (props) => {

    return (
        <div className="contact-wrapper">
            <div className="header-container">
                <div className="title">
                    <h3>Connect with me today.</h3>
                </div>

                <div className='home-mouse'>
                    <div className='mouse'></div>
                </div>
            </div>

            <ContactForm emailSent={props.emailSent} errors={props.errors} formControls={props.formControls} onChange={props.onChange} onClick={props.onClick} />
        </div >
    )
}

export default ContactPageContainer;