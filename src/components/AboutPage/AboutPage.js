import React from 'react';

import classes from './AboutPage.module.css';
import Image from '../Images/Image';
import Description from '../Description/Description';

const AboutPage = (props) => {
    const buildInstagram = (i) => {
        return <div className={classes.Photo}><img alt="instagram" src={i} /></div>;
    }

    return(
        <div className={classes.Homepage}>
            <div className={classes.HomepageContainer}>
                <div className={classes.title}>
                    <h3>My Passions & Personality</h3>
                </div>
            </div>
            <div className={classes.AboutPage}>
                <Image src={props.state.image} alt={props.alt} />
                <Description desc={props.state.description} />
            </div>

            <div className={classes.InstagramFeed}>
                <h1>My Instagram Feed</h1>
                <div className={classes.Feed}>
                    <div className={classes.Photo}><img alt="instagram" src="/images/instagram/IMG_2171.jfif" /></div>
                    <div className={classes.Photo}><img alt="instagram" src="/images/instagram/IMG_0265.jpg" /></div>
                    <div className={classes.Photo}><img alt="instagram" src="/images/instagram/IMG_0011.jpg" /></div>
                    <div className={classes.Photo}><img alt="instagram" src="/images/instagram/IMG_2367.jpg" /></div>
                    <div className={classes.Photo}><img alt="instagram" src="/images/instagram/IMG_0267.jfif" /></div>
                    <div className={classes.Photo}><img alt="instagram" src="/images/instagram/IMG_0010.jfif" /></div>
                    <div className={classes.Photo}><img alt="instagram" src="/images/instagram/IMG_0268.jfif" /></div>
                    <div className={classes.Photo}><img alt="instagram" src="/images/instagram/IMG_2771.jpg" /></div>
                    {/* {props.state.instagram_feed.length > 0 ?
                        props.state.instagram_feed.map(buildInstagram)
                    : null} */}
                </div>

                <div className={classes.FollowInstagram}>
                <a href="https://www.instagram.com/pratikmathur279/" target="_blank" className={classes.button}>Follow me on Instagram</a>
                </div>
            </div>
        </div>
        
    )
}

export default AboutPage;

