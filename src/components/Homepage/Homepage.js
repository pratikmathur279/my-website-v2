import React from 'react';

import classes from './Homepage.module.css';
import HomePageContainer from '../Homepage/HomepageContainer/HomepageContainer';
import SkillsBar from '../Homepage/SkillsBar/SkillsBar';
import IntroContainer from '../Homepage/IntroContainer/IntroContainer';

import LazyLoad from 'react-lazyload';
import MaterialIcon from 'material-icons-react';

import HexagonsContainer from '../UI/HexagonsContainer/HexagonsContainer';

const Homepage = (props) => {

    return(
        <div className={classes.Homepage}>
            <div className={classes.HomePageContainer}>
                <HomePageContainer/>
            </div>
            
            <LazyLoad height={400}>
                <HexagonsContainer {...props} />
            </LazyLoad>
            
            <LazyLoad height={600}>
                <div className={classes.Container2}>
                    <div className={classes.IntroContainer}>
                        <IntroContainer image={props.image}/>
                    </div>
                    <div className={classes.SkillsContainer}>
                        <SkillsBar skills={props.skills}/>
                    </div>
                </div>
            </LazyLoad>
        </div>
    )
}

export default Homepage;