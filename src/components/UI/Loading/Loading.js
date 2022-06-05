import React from 'react';
import LoadingCircle from '../../../../public/images/LoadingCircle.svg';

const Loading = (props) => {
    return (
        <div id="loading-box" >
            {props.loadingText ? <h1>{props.loadingText}</h1> : null}
            <LoadingCircle />
        </div>
    )
}

export default Loading;