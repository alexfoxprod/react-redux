import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { commentUpdate } from "./redux/actions";

function SingleComment({ data }) {
  const [commentText, setCommentText] = useState("");
  const { text, id } = data;

  const dispatch = useDispatch();

  useEffect(() => {
    if (text) {
      setCommentText(text);
    }
  }, [text]);

  const handleInput = (event) => {
    setCommentText(event.target.value);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(commentUpdate(commentText, id));
  };

  return (
    <form onSubmit={handleUpdate} className="comments-item">
      <div className="commnet-item-delete">&times;</div>
      <input type="text" value={commentText} onChange={handleInput} />
      <input type="submit" hidden />
    </form>
  );
}
export default SingleComment;
