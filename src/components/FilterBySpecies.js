import React from 'react';

const FilterBySpecies = props => {
    const handleChange = ev => {
        props.handleFilter({
            value: ev.target.value,
            key: 'species'
        });
    };

    return(
        <>
            <label className="form_label_specie" htmlForm="species">Especie:</label>
            <select 
            className="form_input_select" 
            name="species" 
            id="species"
            value={props.filterSpecies}
            onChange={handleChange}>
                <option value="">Todas</option>
                <option value="Human">Human</option>
                <option value="Alien">Alien</option>
            </select>

        </>
 
    );
};

export default FilterBySpecies;