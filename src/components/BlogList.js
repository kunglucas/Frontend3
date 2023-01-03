import { Link } from 'react-router-dom';
import { useState } from 'react';


const BlogList = ({ blogs }) => {
  const [search, setSearch] = useState('')
  return (
    <table id="tableData">
    <input placeholder="Search table.." type="text" onChange={(e) => setSearch(e.target.value)} />
   <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Email</th>
      <th>Type</th>
    </tr>
      {blogs.filter((blog) => {
        return search.toLowerCase() === '' ? blog : blog.name.toString().toLowerCase().includes(search.toLowerCase()) || blog.type.toString().toLowerCase().includes(search.toLowerCase()) || blog.email.toString().toLowerCase().includes(search.toLowerCase())

      }).map(blog => (
  <>
  <tr className="blog-preview" key={blog.id}>
    <td><Link to={`/blogs/${blog.id}`}>
    {blog.name }
    </Link>
    </td>
    <td>{blog.age }</td>
    <td>{blog.email }</td>
    <td>
    {blog.type }
    </td>
  </tr>
  </>

      ))}
    </table>
  );
}
 
export default BlogList;