import React from 'react';
import { Link } from 'react-router-dom';

const Character = props => {
    return(
        <Link to={`./user/${props.user.id}`}>
        <div className="card">
            <img
            className="card_img"
            src={props.user.image}
            alt={`Foto de ${props.user.name}`}
            title={`Foto de  ${props.user.name}`}
            />
            <h4 className="card_name">{props.user.name}</h4>
            <p className="card_specie">{props.user.specie}</p>
        </div>
        </Link>
    )
};

export default Character;