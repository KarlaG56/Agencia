import {useContext} from 'react';
import UserContext from "../context/UserContext"
import {useNavigate, Navigate, Outlet} from 'react-router-dom';

function EmployeeRoute(){
	const {user} = useContext(UserContext)
	const navigate = useNavigate()

	console.log(user)

	return (user.role == "employee" ? <Outlet/> : navigate("/NotAuthorized"))
}

export default EmployeeRoute;