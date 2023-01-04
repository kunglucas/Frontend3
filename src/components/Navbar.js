import './Navbar.component.scss';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="credit">Lucas & Gustav</h1>
      <div className="links">
      <Link to="/">Home</Link>
         {/* Vi bör ändra länkarna till: <Link to="/">Home</Link> och samma nedan */} 
         <Link to="/create">Add user</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;