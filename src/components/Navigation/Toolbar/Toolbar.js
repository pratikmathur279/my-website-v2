import React from 'react';

// import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import { Link } from 'react-router-dom';

const Toolbar = (props) => {
    let toolbarCSS = `Toolbar `;
    if (props.navScrolled == 'scrolled') {
        toolbarCSS = toolbarCSS + `Scrolled`;
    }

    return (
        <header className={toolbarCSS}>
            <DrawerToggle clicked={props.drawerToggleClicked} />

            <Link to="/" className="my-logo">
                <img alt="Logo" src="/images/logos/pm_logo.png" />
            </Link>

            <nav className="DesktopOnly">
                <NavigationItems navScrolled={props.navScrolled} />
            </nav>
        </header >
    );
}

export default Toolbar;