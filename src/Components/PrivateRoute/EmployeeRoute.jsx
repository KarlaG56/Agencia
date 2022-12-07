import {useContext} from 'react';
import { useNavigate, Navigate, Outlet } from 'react-router-dom';
import UserContext from "../context/UserContext"

function EmployeeRoute(){
	const {user} = useContext(UserContext)
	const navigate = useNavigate()

	console.log(user)

	return (user.role == "employee" ? <Outlet/> : <Navigate to="/NotAuthorized"/>)
}

export default EmployeeRoute;