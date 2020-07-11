import React from 'react';

import classes from './DrawerToggle.module.css';

const drawerToggle = (props) => (
    <div className={classes.DrawerToggle}>
        <div id="Burger" className={classes.Burger} onClick={props.clicked}></div>
    </div>
    
);

export default drawerToggle;