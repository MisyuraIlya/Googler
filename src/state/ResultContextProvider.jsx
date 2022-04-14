import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';


//hook
const useResults = () => {
    const context = useContext(StateContext);
    if(!context) {
        throw new Error('Can not run without StateContext')
    }
    return context
}

//helpers
const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('russia');
  
    const getResults = async (url) => {
      setLoading(true);
  
      const res = await fetch(`${baseUrl}${url}`, {
        method: 'GET',
        headers: {
          'x-user-agent': 'desktop',
          'x-proxy-location': 'EU',
          'x-rapidapi-host': 'google-search3.p.rapidapi.com',
          'x-rapidapi-key': '0f67e1c990msh639f5f95718baa9p1df673jsnc9798cd54593'
        },
      });
  
      const data = await res.json();
      console.log(data)
  
      setResults(data);
      setLoading(false);
    };

    return (
        <StateContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading }}>
        {children} 
        </StateContext.Provider>
    );
};

export {ResultContextProvider, useResults};