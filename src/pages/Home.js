import { useState, useEffect } from "react";
import Comment from "../Component/Comment";
import { getAllComments } from "../Services/GetAllComments";
const Home = (props) => {
  const [comments, setComments] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    getComment();
  }, []);
  const getComment = async () => {
    try {
      const { data } = await getAllComments();
      setComments(data);
    } catch (error) {
      setError(true);
    }
  };

  const renderComment = () => {
    let renderValue = <p>loading...</p>;
    if (error) {
      renderValue = <p>fetch data is fail</p>;
    }
    if (comments) {
      renderValue = (
        <div className="boxComment">
          {comments?.map((com) => (
            <Comment key={com.id} data={com} />
          ))}
        </div>
      );
    }
    return renderValue;
  };

  return <div className="home"> {renderComment()}</div>;
};

export default Home;
