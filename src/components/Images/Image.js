import React from 'react';
import classes from './Image.module.css';

const Image = ( props ) => (
    <div className={classes.Image}>
        <img 
            src={props.src}
            alt={props.alt}>
        </img>
    </div>
);

export default Image;