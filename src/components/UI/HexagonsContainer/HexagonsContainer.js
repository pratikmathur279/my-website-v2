import React from 'react';

import MaterialIcon from 'material-icons-react';

const HexagonsContainer = (props) => {
    const buildList = (hex) => {
        return (
            <div key={hex.id} className="AlignHexagon">
                <div className="Hexagon">
                    <div className="Icons">
                        <MaterialIcon key={hex.id} icon={hex.name} size={window.innerWidth <= 500 ? 60 : 80} />
                    </div>

                </div >
                <h3>{hex.title}</h3>
                <p>{hex.desc}</p>
            </div >
        )
    }
    return (
        <div className="HexagonsContainer">
            <div className="hexagons-wrapper">
                {props.hexagons.map(buildList)}
            </div>
        </div >
    );
}

export default HexagonsContainer;