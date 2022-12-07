import { useState, useContext } from "react";
import reactDOM from "react-dom/client"
import UserContext from "../context/UserContext"
import ValidateContext from "../context/ValidateContext"

function CommentBox() {
  const [comment, setComment] = useState("");
  const { user, setUser } = useContext(UserContext);
  const { validate, setValidate } = useContext(ValidateContext);
  function handleChangetextarea(event) {
    setComment(event.target.value);
  }
  function handleClick() {
    var today = new Date();
    var now = today.toLocaleString();
    if(user == undefined){
      alert("Inicie sesión primero!")
    }
    const option = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        cache: "no-cache",
        credentials: "same-origin",
        mode: "cors",
        "Authorization": window.localStorage.getItem("token")
      },
      body: JSON.stringify({
        comment: comment,
        date: now
      }),
    };
    fetch("http://localhost:8080/comment/" + user.id, option)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }
  return (
    <>
      <div id="divPadre" className="CommentBox-container">
        <div className="Title-comment">
          <h2>🔥 Comments 🔥</h2>
        </div>
        <label id="warning">
          Post comments with your account, so you can manage them in the future.
          If you post anonymous comments, you will not be able to edit or delete
          them.
        </label><br/>
        <textarea onChange={handleChangetextarea}
          cols="20"
          rows="5"
          placeholder="Let us know what you think (^^)"
        ></textarea>
        <br />
        <button id="Publish" onClick={handleClick}>
          Publish
        </button>
      </div>
      <br />
    </>
  );
}
export default CommentBox;
