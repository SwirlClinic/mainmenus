import React from 'react';
import {createPageObject} from '../../../Util/Util';


const HaloComponent = () => (
    <div>
        <h1>Halo!</h1>
    </div>
);

const Halo = createPageObject('/halo', HaloComponent);


export default Halo;