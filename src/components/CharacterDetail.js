import React from 'react';
import { Link } from 'react-router-dom';

const UserDetail = props => {
    const getStatus = () =>{
        if(props.user.status === 'Alive'){
            console.log(props.user.status);
            return 'far fa-heart';
        }else if(props.user.status === 'Dead'){
            return 'fas fa-skull-crossbones';
        }else{
            return 'fas fa-question'
        }
    };
 
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
                <li>Status:    <i className={getStatus()}></i>
                </li>
                </ul>
                </section>
                <Link className="link_back" to="/">Go back</Link>
            </div>
        </div>
    );
};
export default UserDetail;



//muertos<i class="fas fa-skull-crossbones"></i>

//vivos <i class="far fa-heart"></i>

//question <i class="fas fa-question"></i>