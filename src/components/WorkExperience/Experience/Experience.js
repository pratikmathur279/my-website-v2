import React from 'react';

const Experience = (props) => {
    const client = props.data.client;
    const buildRow = (responsibility) => (
        <li>{responsibility}</li>
    );

    return (
        <div className="Experience">
            <h3>{props.data.position}</h3>
            <div className="container">
                <h4>{props.data.name}, <span>{props.data.from} - {props.data.to}</span></h4>
            </div >
            {client ? <h4>Client: {client}</h4> : ""}
            <ul className="responsibilities">
                {props.data.responsibilities.map(buildRow)}
            </ul>
        </div>
    )
}


export default Experience;