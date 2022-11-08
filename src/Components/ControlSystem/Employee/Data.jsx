import { Link } from 'react-router-dom';
import { useRef, useNavigate } from "react";

function Data() {

    const form = useRef(null);
    const navigate = useNavigate;

    const handleSubmit = (event) => {
        event.preventDefault();

        let emailConfirm1 = document.getElementById("emailConfirm1");
        let emailConfirm2 = document.getElementById("emailConfirm2");
        let passwordConfirm1 = document.getElementById("passwordConfirm1");
        let passwordConfirm2 = document.getElementById("passwordConfirm2");
        let age = document.getElementById("age");
        let cellphone = document.getElementById("cellphone");

        if (
            emailConfirm1.value == emailConfirm2.value &&
            passwordConfirm1.value == passwordConfirm2.value ||
            emailConfirm1.value == "" || emailConfirm2.value == "" ||
            passwordConfirm1.value == "" || passwordConfirm2.value == "" ||
            age.value == "" || cellphone.value == ""
        ) {
            const formData = new FormData(form.current);
            fetch("http://localhost:8080/user/2", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    fullName: formData.get("user"),
                    email: formData.get("email"),
                    password: formData.get("password"),
                    age: formData.get("age"),
                    cellphone: formData.get("cellphone"),
                }),
            });
        } else {
            console.log("tas loco")
        }
    };

    return (
        <div className="EmployeeRegister">
            <h3 className="Employee_titulo">Register Employee</h3>

            <form className='ControllerEmployeeRegisterForm'>
                <div>
                    <label id="Full_name">Full name</label><br />
                    <input className="Employee_place" type="text" name="user" />
                </div>
                <br />

                <div >
                    <label id="Employee_Email">Email</label><br />
                    <input className="Employee_place" type="text" id="emailConfirm1" />
                </div>
                <br />

                <div>
                    <label id="Employee_Email">Confirm email</label>
                    <br />
                    <input className="Employee_place" type="email" id="emailConfirm2" />
                </div>
                <br />

                <div >
                    <label id="Employee_Password">Password</label><br />
                    <input className="Employee_place" type="password" id="passwordConfirm1" />
                </div>
                <br />

                <div>
                    <label id="Employee_Password">Confirm password</label>
                    <br />
                    <input className="Employee_place" type="password" id="passwordConfirm2" />
                </div>

                <div >
                    <label id="Role">Role</label><br />
                    <input className="Employee_place" type="text" name='role' />
                </div>
                <br />

                <div >
                    <label id="Age">Age</label><br />
                    <input className="Employee_place" type="text" name="age" />
                </div>
                <br />

                <div >
                    <label id="Cellphone">Cellphone</label><br />
                    <input className="Employee_place" type="text" name="cellphone" />
                </div>

                <div className="Create-button-container-EmployeeRegister">
                    <button id="Create-Employee-button" >Create account</button>
                </div>
            </form>



        </div>
    );




}

export default Data;