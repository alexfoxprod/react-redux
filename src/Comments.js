import { useState } from "react";
import SingleComment from "./SingleComment";

function Comments(props) {
  const [textComment, setTextComment] = useState("");
  console.log("props comment =>", props);

  const handleInput = (event) => {
    console.log("input text", event.target.value);
    setTextComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit text", textComment);
  };
  return (
    <div className="card-comments">
      <form onSubmit={handleSubmit} className="comments-item-create">
        <input type="text" value={textComment} onChange={handleInput} />
        <input type="submit" hidden />
      </form>
      <SingleComment />
    </div>
  );
}
export default Comments;
