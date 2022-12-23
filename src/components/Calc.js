import { Link } from 'react-router-dom';

const Calc = ({ blogs }) => {
    
    return (
        <div className="stats">
                    {blogs.map(blog => 
            (
            <>
            <div className="blog-preview" key={blog.id}>
              <p>{blog.age }</p>
            </div>
            </>
                ))}
        </div>
    );
  }
   
  export default Calc;