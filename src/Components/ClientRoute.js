import {useContext} from 'react';
import Context from './contex/context.js';
import {useNavigate, Navigate, Outlet} from 'react-router-dom';

function ClientRoute(){
	const {user} = useContext(Context)
	const navigate = useNavigate()

	return (user.role == 2 ? <Outlet/> : <Navigate to='/notFound'/>)
}

export default ClientRoute;
