import React from 'react';
import Character from './Character';

const CharacterList = props =>{
    const userElements = props.users.map(user => {
        return (
            <li key={user.id}>
                <Character user={user}/>
            </li>
        );
    });

    return(
        <section>
            <ul className="cards">{userElements}</ul>
        </section>
    );
};

export default CharacterList;