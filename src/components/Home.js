import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import Calc from "./Calc";

const Home = () => {
  const [blogs, setBlogs] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/blogs')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setBlogs(data);
      })
  }, [])

  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} />}
      {blogs && <Calc blogs={blogs} />}
    </div>
  );
}
 
export default Home;