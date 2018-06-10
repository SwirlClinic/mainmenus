import React from 'react';
import {Link} from 'react-router-dom';
import './GameCard.css';

const GameCard = ({game}) => (
    <Link
        className="gamecard mdl-card mdl-cell mdl-cell--4-col"
        to={game.route}
        style={{
            textDecoration: 'none',
            background: "url(" + game.thumbnail + ") center"
        }}
    >
        <div className="mdl-layout-spacer" />
        <div className="subtitle">
            <h3>{game.title}</h3>
        </div>

    </Link>
);

export default GameCard;

