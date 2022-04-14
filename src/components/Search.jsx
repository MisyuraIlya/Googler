import React, {useState, useEffect} from 'react';
import Links from './Links';
import { useDebounce } from 'use-debounce';
import { useResults } from '../state/ResultContextProvider';
const searchButton = new URL('../../public/images/search.png', import.meta.url)

const Search = () => {
    const [text, setText] = useState();
    const { setSearchTerm } = useResults();
    const [debouncedValue] = useDebounce(text, 300)

    useEffect(() => {
        if(debouncedValue) setSearchTerm(debouncedValue)
    }, [debouncedValue])
    return (
    <div className='form'>
        <div className='search_container'>
            <div className='search-bar'>
                <input value={text} onChange={(event) => setText(event.target.value)} text="text" placeholder='Search'></input>
                <button onClick={() => setText('')} type='submit'><img src={searchButton}/></button>
            </div>
            <div className='nav_links'>
                <Links/>
            </div>        
        </div>
    </div>
    );
};

export default Search;