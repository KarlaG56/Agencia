import {useRef, useState, useContext, useEffect} from 'react'
import { Link, useNavigate, Navigate} from "react-router-dom";
import UserContext from "../context/UserContext"
import ValidateContext from "../context/ValidateContext"

function Data() {
    const navigate = useNavigate();
    const {user, setUser} = useContext(UserContext);
    const {validate, setValidate} = useContext(ValidateContext);
    const form = useRef(null);

    const handleSubmit = async (event) => {
      event.preventDefault();
  
        const formData = new FormData(form.current);
        try {
            let response = await fetch("http://localhost:8080/user/validate", 
                {method: "POST",
                headers:{
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": window.localStorage.getItem("token")
                },
                body: JSON.stringify({
                    email: formData.get('email'),
                    password: formData.get('password'),
                })
            })
            let data = await response.json()   
            window.localStorage.setItem("token", data.token)
                      
            /*console.log("soy el token")
            console.log(data.token)*/
            setUser(data.data); 
            setValidate(data.success)  
            console.log(data)   
            console.log(user)
            console.log(validate)
            data.success ? navigate("/") : alert("Invalid User or Password")    
        } catch (error) {
            console.log (error)
        }
}
    return (
        <div className="Login-container">
             <br/><br/>
            <div className="title-container-1">
                <div className="Logo-container">
                    <img src="/icon/Logo.svg" alt="" />
                </div>
               
                <h1>Touring The Globe✨</h1>
            </div>

            <h3 className='Title_R'>Account login</h3>
            <form className='LoginForm' ref={form} onSubmit={handleSubmit}>
                <div>
                    <label id="Email">Email</label><br />
                    <input className="place" type="text" name="email" id='email_Login'/>
                </div>
                <br />

                <div >
                    <label id="Password">Password</label><br />
                    <input className="place" type="password" name="password" id='password_Login'/>
                </div>

                <button type='submit' id="Create-User-button">Login</button>
                <h4 id='Text-Login'>or</h4><br />
                <Link id="Create-button" to="/Register">Create account</Link>
            </form>
        </div>
    );
}
export default Data;