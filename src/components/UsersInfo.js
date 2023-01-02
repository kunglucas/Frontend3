import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const UsersInfo = () => {
    const { id } = useParams();
    const { data: blog, error} = useFetch('http://localhost:3001/blogs/' + id);
    const history = useHistory();
    const handleDelete = () => {
        fetch('http://localhost:3001/blogs/' + blog.id, {
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
        { blog && (
          <tr>
            <td>{ blog.name }</td>
            <td>{ blog.age }</td>
            <td>{ blog.email }</td>
            <td>{ blog.year }</td>
            <td>{ blog.month }</td>
            <td>{ blog.day }</td>
            <td><button className="btn-delete" onClick={handleDelete}>Delete</button></td>
          </tr>
        )}
      </table>
    );
  }
 
export default UsersInfo;