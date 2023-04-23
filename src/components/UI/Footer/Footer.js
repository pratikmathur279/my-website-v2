import React from "react";

import FooterImage from "./FooterImage/FooterImage";

const footer = (props) => {
	let year = new Date().getFullYear();

	return (
		<div className="Footer">
			<div className="FooterDiv">
				<div className="FooterContainer">
					<FooterImage
						icon="AiFillLinkedin"
						size="32"
						color="white"
						alt="LinkedIn"
						url="https://www.linkedin.com/in/pratik-mathur/"
						target="_blank"
					/>
					<FooterImage
						icon="AiFillGithub"
						size="32"
						color="white"
						alt="Github"
						url="https://github.com/pratikmathur279"
						target="_blank"
					/>
					<FooterImage
						icon="AiOutlineInstagram"
						size="32"
						color="white"
						alt="Instagram"
						url="https://www.instagram.com/pratikmathur279/"
						target="_blank"
					/>
					<FooterImage
						icon="AiOutlineMail"
						size="32"
						color="white"
						alt="E-Mail"
						url="mailto:pratikmathur279@gmail.com"
					/>
					<FooterImage
						icon="FaWhatsapp"
						size="32"
						color="white"
						alt="E-Mail"
						url="https://wa.me/7039815938"
						target="_blank"
					/>
				</div>
			</div>
			<div className="FooterDiv">
				<p>©{year} Pratik Mathur. All rights reserved.</p>
			</div>
		</div>
	);
};

export default footer;
