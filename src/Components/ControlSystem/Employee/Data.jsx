import {Link} from 'react-router-dom';


function Data() {

    return (
        <div className="EmployeeRegister">
            <h3 className="Employee_titulo">Register Employee</h3>

            <form className='ControllerEmployeeRegisterForm'>
                <div>
                    <label id="Full_name">Full name</label><br />
                    <input className="Employee_place" type="text"  />
                </div>
                <br />

                <div >
                    <label id="Employee_Email">Email</label><br />
                    <input className="Employee_place" type="text"  />
                </div>
                <br />

                <div >
                    <label id="Employee_Password">Password</label><br />
                    <input className="Employee_place" type="password"  />
                </div>
                <br />

                <div >
                    <label id="Role">Role</label><br />
                    <input className="Employee_place" type="text"  />
                </div>
                <br />

                <div >
                    <label id="Age">Age</label><br />
                    <input className="Employee_place" type="text"  />
                </div>
                <br />
           
                <div >
                    <label id="Cellphone">Cellphone</label><br />
                    <input className="Employee_place" type="text"  />
                </div>

                <div className="Create-button-container-EmployeeRegister">
                    <Link id="Create-Employee-button" to="/Login">Create account</Link>
                </div>
            </form>

            

        </div>
    );




}

export default Data;