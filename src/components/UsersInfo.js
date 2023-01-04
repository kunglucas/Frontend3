import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
//This component is for the individual users and shows som information about the users aswell as the date the user was registered.
//We have written a function making it possible to delete a user using a delete button.
const UsersInfo = () => {
    const { id } = useParams();
    const { data: user, error } = useFetch('http://localhost:3001/users/' + id);
    const history = useHistory();
    const handleDelete = () => {
        fetch('http://localhost:3001/users/' + user.id, {
        method: 'DELETE'
        }).then(() => {
          history.push('/success');
        }) 
      }
    return (
      <>
        <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Type</th>
          <th>Year</th>
          <th>Month</th>
          <th>Day</th>
          <th>Edit</th>
        </tr>
        </thead>
        { user && (
          <tbody key={user.id}>
          <tr key={user.id}>
            <td>{ user.name }</td>
            <td>{ user.age }</td>
            <td>{ user.email }</td>
            <td>{ user.type }</td>
            <td>{ user.year }</td>
            <td>{ user.month }</td>
            <td>{ user.day }</td>
            <td><button className="btn-delete" onClick={handleDelete}>Delete</button></td>
          </tr>
          </tbody>
        )}
      </table>
      { error && <p>{ error }</p> }
      </>
    );
  }
 
export default UsersInfo;