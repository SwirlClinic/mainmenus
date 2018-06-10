import React from 'react';
import {createPageObject} from '../../../Util/Util';
import thumbnail from '../../../Assets/bg/maplestory.jpg';

import './Maplestory.css';

import music from '../../../Assets/music/maplestory.mp3';

const MaplestoryComponent = () => (
    <div className="maplestory">

        <audio autoPlay="true" src={music} />
    </div>
);

const Maplestory = createPageObject('/maplestory', MaplestoryComponent, "Maplestory", thumbnail);


export default Maplestory;