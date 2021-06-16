import React from 'react';

const Filters = props => {
    const handleChange = ev => {
        props.handleFilter({
            value: ev.target.value,
            key:"name"
        });
    }
    return(
        <form className="form">
        <label className="form_label" htmlForm="name">Filtrar por nombre:</label>
        <input 
        className="form_input-text" 
        type="text" 
        name="name" 
        id="name"
        onChange={handleChange}
        />
        </form>
    );
};

export default Filters;
