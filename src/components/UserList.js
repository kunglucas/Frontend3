import { Link } from 'react-router-dom';
import { useState } from 'react';
import './UserList.component.scss'



const UserList = ({ users }) => {

  const handleScroll = event => {
    document.getElementById("search-input").style.background = "rgba(255,255,255,.5)";
  };
const [search, setSearch] = useState('');
  return (

    <div className="table-container" onScroll={handleScroll}>
    <input id="search-input" placeholder="Search table.." type="text" onChange={(e) => setSearch(e.target.value)} />
          <table id="tableData">
          <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Type</th>
          </tr>
          </thead>
      {users.filter((user) => {
        return search.toLowerCase() === '' ? user : user.name.toString().toLowerCase().includes(search.toLowerCase()) || user.type.toString().toLowerCase().includes(search.toLowerCase()) || user.email.toString().toLowerCase().includes(search.toLowerCase())

      }).map(user => (
        <tbody key={user.id}>
        <tr className="user-preview" key={user.id}>
          <td><Link to={`/users/${user.id}`}>
          {user.name }
          </Link>
          </td>
          <td>{user.age }</td>
          <td>{user.email }</td>
          <td>
          {user.type }
          </td>
        </tr>
        </tbody>
 

      ))}
    </table>
    </div>

  );
}
 
export default UserList;