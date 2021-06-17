import React from 'react';
import { Link } from 'react-router-dom';

const UserDetail = props => {
    // const getStatus = () =>{
    //     if(props.user.status === 'Alive'){
    //         console.log(props.user.status);
    //         return 'fa-solid fa-wave-pulse';
    //     }else if(props.user.status === 'Dead'){
    //         return 'fa-solid fa-tombstone';
    //     }else{
    //         return 'fa-solid fa-circle-question'
    //     }
    // };
 
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
                <li>Status: {props.user.status}
                {/* <i class={getStatus()}></i> */}
                </li>
                </ul>
                </section>
                <Link className="link_back" to="/">Go back</Link>
            </div>
        </div>
    );
};
export default UserDetail;

// icono muerto <i class="fa-solid fa-tombstone"></i>
//icono vivo <i class="fa-solid fa-wave-pulse"></i>
// icono pregunta <i class="fa-solid fa-circle-question"></i>