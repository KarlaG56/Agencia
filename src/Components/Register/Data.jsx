import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";

function Data() {

  const form = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    let emailConfirm1 = document.getElementById("emailConfirm1");
    let passwordConfirm1 = document.getElementById("passwordConfirm1");
    let passwordConfirm2 = document.getElementById("passwordConfirm2");
    let age = document.getElementById("age");
    let cellphone = document.getElementById("cellphone");
    if (
      passwordConfirm1.value == passwordConfirm2.value ||
      emailConfirm1.value == "" ||
      passwordConfirm1.value == "" || passwordConfirm2.value == "" ||
      age.value == "" || cellphone.value == ""
    ) {
      const formData = new FormData(form.current);
      fetch("http://localhost:8080/user/1", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Authorization": window.localStorage.getItem("token")
        },
        body: JSON.stringify({
          fullName: formData.get("user"),
          email: formData.get("email"),
          password: formData.get("password"),
          age: formData.get("age"),
          cellphone: formData.get("cellphone"),
        }),
      });
      navigate("/Login");
    } else {
      console.log("")
    }
  };

  return (
    <div className="Register-container">
      <div className="title-container-1">
        <div className="Logo-container">
          <img src="/icon/Logo.svg" alt="" />
        </div>
        <h1 id="Title-Register">Touring The Globe✨</h1>
      </div>
      <h3 className='Title_R'>Register</h3>

      <form ref={form} onSubmit={handleSubmit}>
        <div>
          <label id="User">Full name</label>
          <br />
          <input className="place" type="text" name="user" />
        </div>
        <br />

        <div>
          <label id="Age_Login">Age</label>
          <br />
          <input className="place" type="number" name="age" id="age" />
        </div>
        <br />

        <div>
          <label id="Cell_Login">Cellphone</label>
          <br />
          <input className="place" type="number" name="cellphone" />
        </div>
        <br />
        
        <div>
          <label id="Email">Email</label>
          <br />
          <input className="place"type="email" name="email" id="emailConfirm1"/>
        </div>
        <br />

        <div>
          <label id="Password">Password</label>
          <br />
          <input className="place" type="password" name="password" id="passwordConfirm1"/>
        </div>
        <br />

        <div>
          <label id="password">Confirm password</label>
          <br />
          <input className="place" type="password" id="passwordConfirm2" />
        </div>

        <div className="Create-button-container">
          <button id="Create-User-button-Register" >Create account</button> 
          <br/><br/><br/>
          <Link id="Create-button_cancel" to="/">Cancel</Link>
        </div>
        
      </form>
    </div>
  );
}
export default Data;
