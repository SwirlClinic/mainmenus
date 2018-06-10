import React from 'react';

import {createPageObject} from '../../Util/Util';
import MainMenus from '../MainMenus/MainMenus';
import GameCard from './Components/GameCard';

import './Home.css';

const games = Object.values(MainMenus).map((item) =>
    <GameCard game={item}/>
);

const HomeComponent = () => (
    <div>
        <div className="topBg">

            <div className="title">
                <i className="material-icons" style={{fontSize: 64}}>
                    restaurant_menu
                </i>
                <h1>Main Menus</h1>
            </div>


            <section className="land">
                    <h2>View main menus of your favorite games!</h2>
            </section>
            <section className="gameTable">

                <div className="mdl-grid">
                    {games}
                </div>
            </section>

        </div>
    </div>
);


const Home = createPageObject('/', HomeComponent);
export default Home;