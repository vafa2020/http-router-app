import { useEffect, useState } from "react";
import getSingleComment from "../Services/GetSingleComment";
import deleteComment from "../Services/DeleteComment";

const FullCommentPage = (props) => {
  const id = props.match.params.id;
  const [comment, setComment] = useState(null);
  useEffect(() => {
    const getComment = async () => {
      try {
        if (id) {
          const { data } = await getSingleComment(id);
          setComment(data);
        }
      } catch (error) {}
    };
    getComment();
  }, [id]);

  const deleteHandler = async () => {
    try {
      if (id) {
        await deleteComment(id);
        props.history.push("/");
      }
    } catch (error) {}
  };

  let commentDetails = <p>please select a comment</p>;
  if (id) commentDetails = <h2>loading...</h2>;

  if (comment) {
    commentDetails = (
      <div className="FullComment">
        <div className="BoxComment">
          <label className="label">Name: </label>
          <span className="text">{comment.name}</span>
        </div>
        <div className="BoxComment">
          <label className="label">Email: </label>
          <span className="text">{comment.email}</span>
        </div>
        <div className="BoxComment">
          <label className="label">body: </label>
          <span className="text">{comment.body}</span>
        </div>
        <button onClick={deleteHandler} className="button">
          delete
        </button>
      </div>
    );
  }
  return commentDetails;
};

export default FullCommentPage;
