import React from 'react';
import Image from '../../Images/Image';

const HomepageContainer = (props) => {
    return (
        <div className="homepage-container">
            <div className='header-content'>
                <div className='content-wrapper'>
                    <h4>Hello!</h4>
                    <h1>I'm Pratik Mathur</h1>
                    <h2>Full Stack Software Developer</h2>
                    <div className="description">
                        <p>I have a passion for creating intuitive, dynamic and cross-platform user experiences.</p>
                    </div>
                </div>

            </div>
            <div className="my-image">
                <Image src={props.image} alt={props.name} />
            </div >
        </div>
    )
}

export default HomepageContainer;

