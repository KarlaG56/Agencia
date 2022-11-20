import {useContext} from 'react';
import {useNavigate, Navigate, Outlet} from 'react-router-dom';
import UserContext from "../context/UserContext"

function ClientRoute(){
	const {user} = useContext(UserContext)
	const navigate = useNavigate()

	return (user ? <Outlet/> : <Navigate to='/notFound'/>)
}

export default ClientRoute;
