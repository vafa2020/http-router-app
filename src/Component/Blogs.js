import { Link } from "react-router-dom";
import queryString from "query-string";

const Blogs = ({match,location}) => {
  const parsed = queryString.parse(location.search);
console.log(parsed);
  const id = match.params.id;
  return (
    <div>
      <h2>blog details-{id}</h2>
      <Link to={`/blogs/${parseInt(id) + 1}`}>go to nextBlogs</Link>
    </div>
  );
};

export default Blogs;
