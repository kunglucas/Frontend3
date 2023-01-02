import { Link } from 'react-router-dom';
import './Table.component.scss';

const UserList = ({ users }) => {
  return (
    <div className="table-container">
    <table>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Email</th>
      <th>Type</th>
    </tr>
      {users.map(user => (
  <>
  <tr className="user-preview" key={user.id}>
    <td><Link to={`/users/${user.id}`}>
    {user.name }
    </Link>
    </td>
    <td>{user.age }</td>
    <td>{user.email }</td>
    <td>
    {/* {user.type } */}
    <Link to={`/users/${user.type}`}>
    {user.type}
    </Link>
    </td>
  </tr>
  </>

      ))}
    </table>
    </div>
  );
}
 
export default UserList;