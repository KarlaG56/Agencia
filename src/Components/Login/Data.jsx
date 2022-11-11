import {useRef, useState, useContext} from 'react'
import { Link, useNavigate} from "react-router-dom";
import { UserContext } from "../context/context"


function Data() {
    const navigate = useNavigate();
    const {user, setUser} = useContext(UserContext);
    const form = useRef(null);

    const handleSubmit = (event) => {
      event.preventDefault();
  
        const formData = new FormData(form.current);
        fetch("http://localhost:8080/user/validate", 
            {method: "POST",
            headers:{
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: formData.get('email'),
                password: formData.get('password'),
            })
        }).then((response) => {
            console.log(response.status)
            if (response.status === 200)
                return response.json()
            else
                console.log("Error")
            })
        .then((data) => {
        console.log(data)
        if(data.data !== null || data.data !== undefined){ 
            if(data.role == "employee"){
                sessionStorage.setItem('id', data.id); 
                navigate("/Control_system/Employee")
            }else{
                sessionStorage.setItem('id', data.id); 
                navigate("/")
            }
        }
    }).catch(error => console.error('Error:', error))

}
    
    
    return (
        <div className="Login-container">
            
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

                <button type='submit' id="Create-User-button">{window.sessionStorage.getItem("id") ? "Login" : "Logout"}</button>
                <h4 id='Text-Login'>or</h4><br />
                <Link id="Create-button" to="/Register">Create account</Link>
                {/*<div className="button-container">
                    <Link id="Login-button" to="/">Log in</Link><br />
                    <h4>or</h4><br />
                    <Link id="Create-button" to="/Register">Create account</Link>
                </div>*/}
            </form>

            

        </div>
    );


}

export default Data;