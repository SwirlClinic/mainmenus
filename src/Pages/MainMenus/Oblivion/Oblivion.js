import React from 'react';
import {createPageObject} from '../../../Util/Util';
import thumbnail from '../../../Assets/bg/oblivion.jpg';

import './Oblivion.css';
import oblivionwebm from '../../../Assets/webm/oblivion.webm';

const OblivionComponent = () => (
    <video playsinline autoPlay loop id="bgvid">
        <source src={oblivionwebm} type="video/webm" />
    </video>
);

const Maplestory = createPageObject('/oblivion', OblivionComponent, "Oblivion", thumbnail);


export default Maplestory;