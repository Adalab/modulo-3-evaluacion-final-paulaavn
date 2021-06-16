import React from 'react';
import { Link } from 'react-router-dom';

const UserDetail = props => {
    return (
        <div className="preview_card">
            <Link classNme="link_back" to="/">Volver al inicio</Link>
            Detalle del personaje
            <header>
                <h2 className="preview_name">{props.user.name}</h2>
            </header>
            <section className="preview_info">
            <img className="preview_image" src={props.user.image} alt={props.user.name}/>
            <h4 className="preview_title">{props.user.name}</h4>
            <ul className="preview_details">
                <li>Specie: {props.user.specie}</li>
                <li>Home planet: {props.user.planet}</li>
                <li>Númber of episodes: {props.user.episodes}</li>
                <li>Status: {props.user.status}</li>
            </ul>
            </section>
        </div>
    );
};
export default UserDetail;