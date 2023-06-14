import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import uniqid from "uniqid";
import { commentCreate } from "./redux/actions";
import SingleComment from "./SingleComment";

function Comments(props) {
  const [textComment, setTextComment] = useState("");
  const comments = useSelector((state) => {
    console.log("redux state => ", state);
    const { commentsReducer } = state;
    return commentsReducer.comments;
  });

  const dispatch = useDispatch();
  const handleInput = (event) => {
    setTextComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit text", textComment);
    const id = uniqid();
    dispatch(commentCreate(textComment, id));
  };

  console.log("Commnets =>", comments);
  return (
    <div className="card-comments">
      <form onSubmit={handleSubmit} className="comments-item-create">
        <input type="text" value={textComment} onChange={handleInput} />
        <input type="submit" hidden />
      </form>
      {!!comments.length &&
        comments.map((res) => {
          return <SingleComment key={res.id} data={res} />;
        })}
    </div>
  );
}
export default Comments;
