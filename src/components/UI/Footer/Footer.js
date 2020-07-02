import React from 'react';

import FooterImage from './FooterImage/FooterImage';
import classes from './Footer.module.css';

const footer = (props) => (
    <div className={classes.Footer}>
        <div className={classes.FooterDiv}>
            <div className={classes.FooterContainer}>
                <FooterImage src={'./images/linkedin1.png'} alt="Facebook" url="https://www.linkedin.com/in/pratik-mathur/" target="_blank" />
                <FooterImage src={'./images/github.png'} alt="Github" url="https://github.com/pratikmathur279"  target="_blank" />
                <FooterImage src={'./images/instagram.png'} alt="Instagram" url="https://www.instagram.com/pratikmathur279/" target="_blank" />
                <FooterImage src={'./images/mail.png'} alt="E-Mail" url="mailto:pratikmathur279@gmail.com" />
            </div>
            
        </div>
        <div className={classes.FooterDiv}>
            <p>©2019 Pratik Mathur. All rights reserved.</p>
        </div>
    </div>
);

export default footer;