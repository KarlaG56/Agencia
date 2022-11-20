import {useContext} from 'react';
import UserContext from "../context/UserContext"
import {useNavigate, Navigate, Outlet} from 'react-router-dom';

function EmployeeRoute(){
	const {user} = useContext(UserContext)
	const navigate = useNavigate()

	return (user.role == 2 ? <Outlet/> : <Navigate to='/notAuthorized'/>)
}

export default EmployeeRoute;