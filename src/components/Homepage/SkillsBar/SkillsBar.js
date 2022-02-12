import React from 'react';

import Filler from './Filler/Filler';

const SkillsBar = (props) => {

    const buildSkillsBar = (skill) => (
        <div key={skill.index} className="SkillsBar">
            <Filler skill={skill} />
        </div>
    )
    return (
        <div className="SkillsBarContainer">
            {props.skills.map(buildSkillsBar)}
        </div >
    )
}

export default SkillsBar;
