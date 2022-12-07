function CardComment({ comment, date, user, id }) {
  function handleClick() {
    let link = "http://localhost:8080/comment/" + id
    fetch(link, { method: "DELETE" })

    let div = document.getElementById(id)
    alert("Comentario eliminado recargue la pagina")
    div.remove()
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
          onClick={handleClick}
          id={id}
        >
          Delete
        </button>
      </div>
      <br/>
    </div>
  );
}

export default CardComment;
