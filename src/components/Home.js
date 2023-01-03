import { useEffect, useState } from "react";
import UserList from "./UserList";
import Calc from "./Calc";

const Home = () => {
  const [users, setUsers] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/users')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setUsers(data);
      })
  }, [])

  return (
    <div className="home">
      {users && <UserList users={users} />}
      {users && <Calc users={users} />}
    </div>
  );
}
 
export default Home;