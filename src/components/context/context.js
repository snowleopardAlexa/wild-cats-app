import { createContext, useCallback, useState } from 'react';
import axios from 'axios';

export const myContext = createContext();

export const AppContext = ({ children }) => {

    const [cats, setCats] = useState([]);
    const [types, setTypes] = useState([]);
    const [randomCats, setRandomCats] = useState([]);

    const fetchHomePageCats = useCallback((searchTerm) => {
       axios.get(`http://localhost:8000/cats`).then(res => {
           console.log(res.data);
       })
    }, [])


   return (
       <myContext.Provider value={{ fetchHomePageCats }}>{ children }</myContext.Provider>
   );
}

export default myContext;

