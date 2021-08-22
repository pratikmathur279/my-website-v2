import React from 'react';

import classes from './Homepage.module.css';
import HomePageContainer from '../Homepage/HomepageContainer/HomepageContainer';
import SkillsBar from '../Homepage/SkillsBar/SkillsBar';
import IntroContainer from '../Homepage/IntroContainer/IntroContainer';

import LazyLoad from 'react-lazyload';
import MaterialIcon from 'material-icons-react';

import HexagonsContainer from '../UI/HexagonsContainer/HexagonsContainer';

const Homepage = (props) => {

    return (
        <div className={classes.Homepage}>
            <div className={classes.HomePageContainer}>
                <HomePageContainer />
            </div>

            <div className={classes.DescriptionContainer}>
                <div className={classes.DescriptionWrapper}>
                    <div className={classes.DescriptionImage}>
                        <img src="/images/Web-Dev.jpg" />
                    </div>

                    <div className={classes.Description}>
                        <h1>My passion and focus is web development</h1>
                        <p>I'm passionate about web development and bringing ideas to life. My primary focus is building robust web applications and software applications by building a great user experience. If you want to learn more about me, pick up the phone and give me a call (or email).</p>
                    </div>
                </div>

            </div>

            <LazyLoad height={650}>
                <HexagonsContainer {...props} />
            </LazyLoad>

            <LazyLoad height={800}>
                <div className={classes.Container2}>
                    <div className={classes.IntroContainer}>
                        <IntroContainer image={props.image} />
                    </div>
                    <div className={classes.SkillsContainer}>
                        <SkillsBar skills={props.skills} />
                    </div>
                </div>
            </LazyLoad>
        </div>
    )
}

export default Homepage;