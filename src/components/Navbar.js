 import './Navbar.component.scss';
//  import { Link } from "react-router-dom"; Denna måste vi ha för att kunna använda link

const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>Lucas & Gustav</h1>
        <div className="links">
           <a href="/">Home</a> 
           {/* Vi bör ändra länkarna till: <Link to="/">Home</Link> och samma nedan */} 
          <a href="/create">Add user</a>
        </div>
      </nav>
    );
  }
   
  export default Navbar;