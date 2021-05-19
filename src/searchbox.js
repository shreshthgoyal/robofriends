import React from 'react';

const Searchbox = ({searchfield, searchChange}) => {
    return (
        <div className="pa2">
        <input type="search" placeholder="Search here..." className="pa3 ba b--green bg-lightest-blue" onChange={searchChange}/>
        </div>
    )
}

export default Searchbox;