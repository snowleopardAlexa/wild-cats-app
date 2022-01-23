import { useState, useEffect } from 'react';
import './homepage.scss';

const HomePage = () => {

  const [searchTerm, setSearchTerm] = useState("");  

  return (
    <div className="homepage">
      <div className="homepage-search">
         <input type="text" 
            placeholder="Search a cat..." 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} />
         <button>Search Cat</button>
      </div>
      <div className="homepage-cats">

      </div>
    </div>
  );
};

export default HomePage;
