import { useState } from "react";

const AddNewComment = ({ addNewComment }) => {
  const [feild, setfeild] = useState({
    name: "",
    email: "",
    body: "",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setfeild({
      ...feild,
      [name]: value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    addNewComment(feild);
    setfeild({
      name: "",
      email: "",
      body: "",
    });
  };
  return (
    <div className="addNewComment">
      <form onSubmit={submitHandler} className="form">
        <div className="boxInput">
          <label className="label">Name: </label>
          <input
            type="text"
            value={feild.name}
            onChange={changeHandler}
            placeholder="insert name ..."
            name="name"
            className="input"
          />
        </div>
        <div className="boxInput">
          <label className="label">Email: </label>
          <input
            type="email"
            value={feild.email}
            onChange={changeHandler}
            placeholder="insert email ..."
            name="email"
            className="input"
          />
        </div>
        <div className="boxInput">
          <label className="label">Body: </label>
          <textarea
            rows="4"
            cols="30"
            value={feild.body}
            onChange={changeHandler}
            placeholder="insert desc ..."
            name="body"
            className="input"
          >
            body
          </textarea>
        </div>
        <button type="submit" className="button">
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddNewComment;
