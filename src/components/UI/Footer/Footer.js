import React from 'react';

import FooterImage from './FooterImage/FooterImage';

const footer = (props) => (
    <div className="Footer">
        <div className="FooterDiv">
            <div className="FooterContainer">
                <FooterImage icon="AiFillLinkedin" size="32" color="white" alt="LinkedIn" url="https://www.linkedin.com/in/pratik-mathur/" target="_blank" />
                <FooterImage icon="AiFillGithub" size="32" color="white" alt="Github" url="https://github.com/pratikmathur279" target="_blank" />
                <FooterImage icon="AiOutlineInstagram" size="32" color="white" alt="Instagram" url="https://www.instagram.com/pratikmathur279/" target="_blank" />
                <FooterImage icon="AiOutlineMail" size="32" color="white" alt="E-Mail" url="mailto:pratikmathur279@gmail.com" />
            </div>

        </div>
        <div className="FooterDiv">
            <p>©2022 Pratik Mathur. All rights reserved.</p>
        </div>
    </div>
);

export default footer;