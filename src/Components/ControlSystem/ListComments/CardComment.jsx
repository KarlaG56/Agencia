function CardComment({ comment, date, user, id }) {
  function handleClick(event) {
    var temp = document.getElementsByClassName("Delete-CommentOfUser");
    var eliminate = temp[--id].id;
    fetch("http://localhost:8080/comment/" + eliminate, { method: "DELETE" })
      .then((response) => response.json())
      .then((response) => {
        setResponseCopy(response);
      });
  }

  return (
    <div className="CommentOfUser">
      <div className="CajaComentario">
        <p className="Comment_UserCreator">{comment}</p>
      </div>
      <p className="Comment_CreatorName">{user}</p>
      <p className="Comment_Post_Time">{date}</p>
      <div className="Delete-button-container-ListComment">
        <button
          className="Delete-CommentOfUser"
          id={id}
          value={id}
          onClick={handleClick}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default CardComment;
