import React from 'react';
import FilterByName from './FilterByName';
import FilterBySpecies from './FilterBySpecies';

const Filters = props => {
    
    return(
        <section>
        <form className="form">
            <FilterByName filterName={props.filterName} handleFilter={props.handleFilter}/>
            <FilterBySpecies filterSpecies={props.filterSpecies} handleFilter={props.handleFilter}/>
        </form>
        </section>
    );
};

export default Filters;
