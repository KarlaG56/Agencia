import {Link} from 'react-router-dom';

function Data() {
    const data = [
        {
            id: 1,
            data: "User Name",
            type: "text",
            name: "User"
        },
        {
            id: 2,
            data: "Email",
            type: "text",
            name: "Email"
        },
        {
            id: 3,
            data: "Confirm email",
            type: "text",
            name: "email"
        },
        {
            id: 4,
            data: "Password",
            type: "password",
            name: "Password"
        },
        {
            id: 5,
            data: "Confirm password",
            type: "password",
            name: "password"

        }
    ]

    return (
        <div className="Login-container">
            <div className="title-container">
                <div className="Logo-container">
                    <img src="/icon/Logo.svg" alt="" />
                </div>
                <h1>Touring The Globe✨</h1>
            </div>
            <h3>Account login</h3>
        
            <form >
                <div>
                    <label id="User">User Name</label><br />
                    <input className="place" type="text"  />
                </div>
                <br />

                <div >
                    <label id="Email">Email</label><br />
                    <input className="place" type="email"  />
                </div>
                <br />

                <div >
                    <label id="email">Confirm email</label><br />
                    <input className="place" type="email"  />
                </div>
                <br />

                <div >
                    <label id="Password">Password</label><br />
                    <input className="place" type="password" />
                </div>
                <br />
                <div >
                    <label id="password">Confirm password</label><br />
                    <input className="place" type="password"  />
                </div>

                <div className="Create-button-container">
                    <Link id="Create-User-button" to="/Login">Create account</Link><br />
                    
                </div>
        
            </form>
        </div>


    );
}

export default Data;