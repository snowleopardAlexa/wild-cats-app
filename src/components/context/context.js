import { createContext, useCallback, useState } from 'react';
import axios from 'axios';

export const myContext = createContext();

export const AppContext = ({ children }) => {

    const [cats, setCats] = useState([]);
    //const [types, setTypes] = useState([]);
    //const [randomCats, setRandomCats] = useState([]);

    const fetchHomePageCats = useCallback(() => {
       axios.get(``).then((res) => {
           console.log(res.data);
           setCats(res.data);
       })
    }, [])


   return (
       <myContext.Provider value={{ fetchHomePageCats, cats }}>{ children }</myContext.Provider>
   );
}

export default myContext;

