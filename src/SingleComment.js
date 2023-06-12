import { useState, useEffect } from "react";
function SingleComment({ data }) {
  const [commentText, setCommentText] = useState("");
  const { text, id } = data;

  useEffect(() => {
    if (text) {
      setCommentText(text);
    }
  }, [text]);

  const handleInput = (event) => {
    setCommentText(event.target.value);
  };
  return (
    <form className="comments-item">
      <div className="commnet-item-delete">&times;</div>
      <input type="text" value={commentText} onChange={handleInput} />
      <input type="submit" hidden />
    </form>
  );
}
export default SingleComment;
