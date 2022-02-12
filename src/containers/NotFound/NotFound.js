import React, { Component } from 'react';

class NotFound extends Component {
    constructor() {
        super();
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <div className="not-found-wrapper">
                    <div className="not-found-container">
                        <h1>404<br />Page does not exist</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default NotFound;