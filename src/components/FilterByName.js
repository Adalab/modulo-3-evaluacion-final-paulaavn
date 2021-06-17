import React from 'react';

const FilterByName = props => {
    const handleChange = ev => {
        props.handleFilter({
            value:ev.target.value,
            key: 'name'
        });
    };

    return(
        <>
            <label className="form_label" htmlForm="name">Filtrar por nombre:</label>
            <input 
            className="form_input-text" 
            type="text" 
            name="name" 
            id="name"
            onChange={handleChange}
            />
        </>
 
    );
};

export default FilterByName;