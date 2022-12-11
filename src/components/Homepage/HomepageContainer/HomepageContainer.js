import React from 'react';
import Image from '../../Images/Image';

import { TypeAnimation } from 'react-type-animation';

const HomepageContainer = (props) => {
	return (
		<div className="homepage-container">
			<div className='header-content'>
				<div className='content-wrapper'>
					<h4>Hello!</h4>
					<h1>Pratik Mathur</h1>

					<div className='hero'>
						<div className="static-text">I'm a</div>
						<TypeAnimation
							sequence={['Developer.', 1500, 'Designer.', 1500, 'Gamer.', 1500, 'Freelancer.', 1500]}
							speed={30}
							wrapper="span"
							repeat={Infinity}
						/>
					</div>

					<div className="description">
						<p>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. I have a passion for creating intuitive, dynamic and cross-platform user experiences.</p>
					</div>
				</div>

			</div>
			<div className="my-image">
				<Image src={props.image} alt="My Image" />
			</div >
		</div>
	)
}

export default HomepageContainer;

