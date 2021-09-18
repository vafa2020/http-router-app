import { Link } from "react-router-dom";

const Component = ({ data }) => {
  return (
    <Link className='link' to={`fullComment/${data.id}`}>
      <div className="comment">
        <div className="feilds">
          <label className="label">Name: </label>
          <span className="text">{data.name}</span>
        </div>
        <div className="feilds">
          <label className="label">Email: </label>
          <span className="text">{data.email}</span>
        </div>
      </div>
    </Link>
  );
};

export default Component;
