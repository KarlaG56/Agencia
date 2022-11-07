
import {Link} from 'react-router-dom';


function Data() {

 
    return (
        <div className="Login-container">
            <div className="title-container">
                <div className="Logo-container">
                    <img src="/icon/Logo.svg" alt="" />
                </div>
                <h1>Touring The Globe✨</h1>
            </div>
            <h3>Account login</h3>

            <form className='LoginForm'>
                <div>
                    <label id="Email">Email</label><br />
                    <input className="place" type="text"  />
                </div>
                <br />

                <div >
                    <label id="Password">Password</label><br />
                    <input className="place" type="password"  />
                </div>

                <div className="button-container">
                    <Link id="Login-button" to="/">Log in</Link><br />
                    <h4>or</h4><br />
                    <Link id="Create-button" to="/Register">Create account</Link>
                </div>
            </form>

            

        </div>
    );




}





export default Data;