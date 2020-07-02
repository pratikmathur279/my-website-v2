import React from 'react';

import classes from './HexagonsContainer.module.css';
import MaterialIcon from 'material-icons-react';

const HexagonsContainer = (props) => {
    return(
        <div className={classes.HexagonsContainer}>
            {props.hexagons.map(hex => {
                return(
                    <div key={hex.id} className={classes.AlignHexagon}>
                        <div className={classes.Hexagon}>
                            <div className={classes.Icons}>
                                <MaterialIcon key={hex.id}  icon={hex.name} size={window.innerWidth <= '500' ? 40 : 80} />
                            </div>
                                
                        </div>
                        <h3>{hex.title}</h3>
                        <p>{hex.desc}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default HexagonsContainer;