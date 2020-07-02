import React from 'react';
import classes from './Loading.module.css';

const Loading = () => {
    return (
        // <div className={classes.spinner}></div>
        <div className={classes.Loading}>
            <img src={'./images/loading.gif'}></img>
        </div>
    )
}

export default Loading;