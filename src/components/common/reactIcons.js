import React from 'react';

const ReactIcons = ({ icon, background, size, color }) => {
    let arr = ['fa', 'io', 'md', 'ti', 'go', 'fi', 'gi', 'wi', 'di', 'ai', 'bs', 'fc', 'gr', 'ri', 'bi', 'hi', 'im', 'io5', 'si', 'vsc', 'cg'];

    let module;
    let name = icon;
    let el = name.substr(0, 2).toLowerCase();

    switch (el) {
        case 'fa': module = require('react-icons/fa');
            break;
        case 'md': module = require('react-icons/md');
            break;
        case 'io': module = require('react-icons/io');
            break;
        case 'ti': module = require('react-icons/ti');
            break;
        case 'go': module = require('react-icons/go');
            break;
        case 'fi': module = require('react-icons/fi');
            break;
        case 'gi': module = require('react-icons/gi');
            break;
        case 'wi': module = require('react-icons/wi');
            break;
        case 'di': module = require('react-icons/di');
            break;
        case 'ai': module = require('react-icons/ai');
            break;
        case 'bs': module = require('react-icons/bs');
            break;
        case 'fc': module = require('react-icons/fc');
            break;
        case 'gr': module = require('react-icons/gr');
            break;
        case 'ri': module = require('react-icons/ri');
            break;
        case 'bi': module = require('react-icons/ri');
            break;
        case 'hi': module = require('react-icons/ri');
            break;
        case 'im': module = require('react-icons/ri');
            break;
        case 'io5': module = require('react-icons/ri');
            break;
        case 'si': module = require('react-icons/ri');
            break;
        case 'vsc': module = require('react-icons/ri');
            break;
        case 'cg': module = require('react-icons/ri');
            break;
        case 'sl': module = require('react-icons/sl');
            break;
    }

    let CustomTag = module[icon];

    console.log(CustomTag);

    return (
        <CustomTag id="CustomTag" size={size} color={color} />
    );
}


export default ReactIcons;