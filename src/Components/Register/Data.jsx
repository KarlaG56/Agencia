import { Link, useNavigate} from "react-router-dom";
import { useRef } from "react";

function Data() {
  const data = [
    {
      id: 1,
      data: "User Name",
      type: "text",
      name: "User",
    },
    {
      id: 2,
      data: "Email",
      type: "text",
      name: "Email",
    },
    {
      id: 3,
      data: "Confirm email",
      type: "text",
      name: "email",
    },
    {
      id: 4,
      data: "Password",
      type: "password",
      name: "Password",
    },
    {
      id: 5,
      data: "Confirm password",
      type: "password",
      name: "password",
    },
  ];

  const form = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    let emailConfirm1 = document.getElementById("emailConfirm1");
    let emailConfirm2 = document.getElementById("emailConfirm2");
    let passwordConfirm1 = document.getElementById("passwordConfirm1");
    let passwordConfirm2 = document.getElementById("passwordConfirm2");

    console.log(emailConfirm1.value)
    console.log(emailConfirm2.value)
    console.log(passwordConfirm1.value)
    console.log(passwordConfirm2.value)
    if (
      emailConfirm1.value == emailConfirm2.value &&
      passwordConfirm1.value == passwordConfirm2.value ||
      emailConfirm1.value == "" || emailConfirm2 == "" ||
      passwordConfirm1 == "" || passwordConfirm2 == ""
    ) {
      const formData = new FormData(form.current);
      fetch("http://localhost:8080/user", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.get("user"),
          email: formData.get("email"),
          password: formData.get("password"),
        }),
      });
      navigate("/Login");
    }else{
        console.log("tas loco")
    }
  };

  return (
    <div className="Login-container">
      <div className="title-container">
        <div className="Logo-container">
          <img src="/icon/Logo.svg" alt="" />
        </div>
        <h1>Touring The Globe✨</h1>
      </div>
      <h3>Account login</h3>

      <form ref={form} onSubmit={handleSubmit}>
        <div>
          <label id="User">Full name</label>
          <br />
          <input className="place" type="text" name="user" />
        </div>
        <br />

        <div>
          <label id="Email">Email</label>
          <br />
          <input
            className="place"
            type="email"
            name="email"
            id="emailConfirm1"
          />
        </div>
        <br />

        <div>
          <label id="email">Confirm email</label>
          <br />
          <input className="place" type="email" id="emailConfirm2" />
        </div>
        <br />

        <div>
          <label id="Password">Password</label>
          <br />
          <input
            className="place"
            type="password"
            name="password"
            id="passwordConfirm1"
          />
        </div>
        <br />
        <div>
          <label id="password">Confirm password</label>
          <br />
          <input className="place" type="password" id="passwordConfirm2" />
        </div>

        <div className="Create-button-container">
          <button id="Create-User-button" >Create account</button>
          {/*<Link id="Create-User-button" to="/Login"><button>Create account</button></Link><br />*/}
        </div>
      </form>
    </div>
  );
}

export default Data;
