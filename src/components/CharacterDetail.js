import React from 'react';
import { Link } from 'react-router-dom';

const UserDetail = props => {
    return (
        <div className="preview_card">
            
            <img className="preview_image" src={props.user.image} alt={props.user.name}/>
            <div className="details_container">
                <header>
                <h2 className="preview_name">{props.user.name}</h2>
                </header>
                <section className="preview_info">
            
                <ul className="preview_details">
                <li>Specie: {props.user.specie}</li>
                <li>Home planet: {props.user.planet}</li>
                <li>Númber of episodes: {props.user.episodes}</li>
                <li>Status: {props.user.status}</li>
                </ul>
                </section>
                <Link className="link_back" to="/">Go back</Link>
            </div>
        </div>
    );
};
export default UserDetail;