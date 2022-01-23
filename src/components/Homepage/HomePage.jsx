import { useState, useCallback, useContext } from 'react';
import './homepage.scss';
import myContext from '../context/context';

const HomePage = () => {

  const [searchTerm, setSearchTerm] = useState("");  
  const { fetchHomePageCats, cats } = useContext(myContext);

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
         {cats? (
           cats.map((cat) => (
             <div className="homepage-cats-grid" key={cat.id}>
             <img src={cat.img} alt="#" />
             <h4>{cat.name}</h4>  
             <h4>{cat.habitant}</h4> 
             <h4>{cat.left}</h4>   
             <h4>{cat.status}</h4>  
             </div>
           ))
           ) : (
           <h2>No cats found! Try another type of a cat...</h2>
         )}
      </div>
    </div>
  );
};

export default HomePage;
