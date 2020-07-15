import React from 'react';

import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import AboutWebsite from '../AboutWebsite/AboutWebsite';
import { Link } from 'react-router-dom';

const Toolbar = ( props ) => {
    let toolbarCSS = `${classes.Toolbar} `;
    if(props.navScrolled == 'scrolled'){
        toolbarCSS = toolbarCSS + `${classes.Scrolled}`;
    }
    return (
        <header className={toolbarCSS}>
            <DrawerToggle clicked={props.drawerToggleClicked} />
            <Link to="/"><img className={classes.Logo} src="/images/logo.png" /></Link>
            <nav className={classes.DesktopOnly}>
                <NavigationItems navScrolled={props.navScrolled}/>
            </nav>
        </header>
    );
}

export default Toolbar;