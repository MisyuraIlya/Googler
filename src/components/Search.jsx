import React from 'react';
import Links from './Links';
const searchButton = new URL('../../public/images/search.png', import.meta.url)

const Search = () => {
    return (
    <div className='form'>
        <div className='search_container'>
            <div className='search-bar'>
                <input text="text" placeholder='Search'></input>
                <button type='submit'><img src={searchButton}/></button>
            </div>
            <div className='nav_links'>
                <Links/>
            </div>        
        </div>
    </div>
    );
};

export default Search;