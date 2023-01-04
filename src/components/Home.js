import { useEffect, useState } from "react";
import UserList from "./UserList";
import Calc from "./Calc";

const Home = () => {
  const [users, setUsers] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/users') //Pass in the endpoint.
      .then(res => {
        return res.json();
      })
      .then(data => {
        setUsers(data);
      })
  }, [])
  //The Home component gets and outputs the components UserList, that shows the table with user information and 
  //Calc that calculates the total age.   
  return (
    <div className="home">
      {users && <UserList users={users} />}
      {users && <Calc users={users} />}
    </div>
  );
}
 
export default Home;