import {useContext} from 'react';
import {useNavigate, Navigate, Outlet} from 'react-router-dom';
import ValidateContext from '../context/ValidateContext';

function ClientRoute(){
	const {validate} = useContext(ValidateContext)
	const navigate = useNavigate()

	return (validate == true ? <Outlet/> : navigate('/notFound'))
}

export default ClientRoute;
