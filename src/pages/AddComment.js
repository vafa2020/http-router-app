import AddNewComment from "../Component/AddNewComment";
import addComment from "../Services/AddNewComment";
const AddComment = (props) => {
  const addNewComment = async (value) => {
    try {
      await addComment(value);
      props.history.push("/");
    } catch (error) {}
  };
  return (
    <div className="addComment">
      <h2>Please Add New Comment</h2>
      <AddNewComment addNewComment={addNewComment} />
    </div>
  );
};

export default AddComment;
