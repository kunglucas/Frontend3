import { Link } from 'react-router-dom';
import './UserList.component.scss';
import { useState } from 'react';



const UserList = ({ users }) => {
  const [search, setSearch] = useState('')
  return (
    <div className="table-container">
    <table id="tableData">
    <input placeholder="Search table.." type="text" onChange={(e) => setSearch(e.target.value)} />
   <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Email</th>
      <th>Type</th>
    </tr>
    
      {users.filter((user) => {
        return search.toLowerCase() === '' ? user : user.name.toString().toLowerCase().includes(search.toLowerCase()) || user.type.toString().toLowerCase().includes(search.toLowerCase()) || user.email.toString().toLowerCase().includes(search.toLowerCase())

      }).map(user => (
  <>
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
  </>

      ))}
    </table>
    </div>
  );
}
export default UserList;