import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import { Link } from 'react-router-dom';

const navigationItems = (props) => {
    return (
        <ul className="NavigationItems">
            <NavigationItem to="/">Portfolio</NavigationItem>
            <NavigationItem to="/about">About</NavigationItem>
            <NavigationItem to="/resume">Resume</NavigationItem>
            <NavigationItem to="/projects">Projects</NavigationItem>
            <NavigationItem to="/blog">Blog</NavigationItem>
            <NavigationItem to="/contact">Contact</NavigationItem>
        </ul >
    )
}


export default navigationItems;