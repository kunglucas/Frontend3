import { Link } from 'react-router-dom';
import { useState } from 'react';
import './UserList.component.scss'

// This component outputs all the user information from the JSON.db to the table on the Home page. 
//We have created a search function that makes it possible to search for names, emails and types.
const UserList = ({ users }) => {
  const [search, setSearch] = useState('')
  return (

    <div className="table-container">
    <input placeholder="Search table.." type="text" onChange={(e) => setSearch(e.target.value)} />
          <table id="tableData">
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