import { useState, useCallback, useContext } from 'react';
import './homepage.scss';
import myContext from '../context/context';

const HomePage = () => {

  const [searchTerm, setSearchTerm] = useState("");  
  const { fetchHomePageCats } = useContext(myContext);

  const fetchCatsHandler = useCallback(() => {
    fetchHomePageCats(searchTerm);
  }, [searchTerm, fetchHomePageCats]);

  return (
    <div className="homepage">
      <div className="homepage-search">
         <input type="text" 
            placeholder="Search a cat..." 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} />
         <button onClick={fetchCatsHandler}>Search Cat</button>
      </div>
      <div className="homepage-cats">

      </div>
    </div>
  );
};

export default HomePage;
