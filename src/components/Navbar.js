import './Navbar.component.scss';
import { Link } from "react-router-dom";
//This component is the navbar. We use Link instead of a tags to avoid having 
//the application reload each time you press the links in the navbar. 
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Lucas & Gustav</h1>
      <div className="links">
      <Link to="/">Home</Link>
         <Link to="/create">Add user</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;