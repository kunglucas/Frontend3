import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const UsersInfo = () => {
    const { id, type } = useParams();
    const { data: user, error} = useFetch('http://localhost:3001/users/' + id);
    const history = useHistory();
    const handleDelete = () => {
        fetch('http://localhost:3001/users/' + user.id || user.type, {
        method: 'DELETE'
        }).then(() => {
          history.push('/success');
        }) 
      }
    return (
        <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Year</th>
          <th>Month</th>
          <th>Day</th>
          <th>Edit</th>
        </tr>
        { error && <div>{ error }</div> }
        { user && (
          <tr>
            <td>{ user.name }</td>
            <td>{ user.age }</td>
            <td>{ user.email }</td>
            <td>{ user.year }</td>
            <td>{ user.month }</td>
            <td>{ user.day }</td>
            <td><button className="btn-delete" onClick={handleDelete}>Delete</button></td>
          </tr>
        )}
      </table>
    );
  }
 
export default UsersInfo;