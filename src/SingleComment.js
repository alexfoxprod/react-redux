function SingleComment(props) {
  console.log("props comment =>", props);

  return (
    <form className="comments-item">
      <div className="commnet-item-delete">&times;</div>
      <input type="text" />
      <input type="submit" hidden />
    </form>
  );
}
export default SingleComment;
