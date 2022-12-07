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
        mode: "cors"
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
      setUser(null)
      setValidate(false)
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
        </label>
        <div className="CommentBox-Box">
          <div className="Image-container">
            <img src="/icon/Person.svg" alt="" />
          </div>
          <strong>
            <label id="Post">Post as:</label>
          </strong>
          <div className="Box">
            <select id="select">
              <option value="User">User</option>
              <option value="Anonymous">Anonymous</option>
              <option value="Anonymous" selected>
                ...
              </option>
            </select>
          </div>
        </div>
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
