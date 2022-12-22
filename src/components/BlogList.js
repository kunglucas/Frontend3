const BlogList = ({ blogs }) => {
  return (
    <table>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Email</th>
      <th>Action</th>
    </tr>
      {blogs.map(blog => (
  <tr className="blog-preview" key={blog.id}>
    <td>{blog.name }</td>
    <td>{blog.age }</td>
    <td>{blog.email }</td>
    <td>Delete</td>
  </tr>
      ))}
    </table>
  );
}
 
export default BlogList;