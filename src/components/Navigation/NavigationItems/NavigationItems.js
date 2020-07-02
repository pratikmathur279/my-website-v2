import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems = () => {
    return (
        <ul className={classes.NavigationItems}>
        <NavigationItem to="/">Portfolio</NavigationItem>
        <NavigationItem to="/about">About</NavigationItem>
        <NavigationItem to="/resume">Resume</NavigationItem>
        <NavigationItem to="/projects">Projects</NavigationItem>
        <NavigationItem to="/contact">Contact</NavigationItem>        
    </ul>
    )
}
    

export default navigationItems;