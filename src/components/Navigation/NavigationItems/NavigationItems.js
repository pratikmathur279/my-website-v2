import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import { Link } from 'react-router-dom';

const navigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <Link to="/"><img alt="Logo" className={classes.Logo} src={props.navScrolled === 'scrolled' ? "/images/logo_2.png" : "/images/logo.png"}/></Link>
            <NavigationItem to="/">Portfolio</NavigationItem>
            <NavigationItem to="/about">About</NavigationItem>
            <NavigationItem to="/resume">Resume</NavigationItem>
            <NavigationItem to="/projects">Projects</NavigationItem>
            <NavigationItem to="/contact">Contact</NavigationItem>        
        </ul>
    )
}
    

export default navigationItems;