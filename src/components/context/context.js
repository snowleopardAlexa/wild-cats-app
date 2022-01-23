import { createContext, useCallback, useState } from 'react';

export const myContext = createContext();

export const AppContext = ({ children }) => {

    const [cats, setCats] = useState([]);
    const [types, setTypes] = useState([]);
    const [randomCats, setRandomCats] = useState([]);

    

   return (
       <myContext.Provider>{ children }</myContext.Provider>
   );
}

