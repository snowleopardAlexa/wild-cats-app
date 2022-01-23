import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-heading">
        <h1>Wild Cats <span>App</span></h1>
      </div>  
        <div className="navbar-links">
          <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/types"><li>Cat Types</li></Link>
            <Link to="/random"><li>Random</li></Link>
          </ul>
        </div>
      </div>
  );
};

export default Navbar;

