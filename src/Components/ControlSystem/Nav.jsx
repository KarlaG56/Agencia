import { Link } from 'react-router-dom';

function Aside() {

    const logout = () => {
        setUser(null)
        setValidate(false)
    }

    return (
        <nav className='Nav-controler'>
            <Link to="/Control_system/Ticket" className='Block'>
                <a>| Upload tickets |</a>
            </Link>

             <Link to="/Control_system/Employee" className='Block'>
                <a>| Register employee |</a>
            </Link>

            <Link to="/Control_system/Destination" className='Block'>
                <a>| Load destiny |</a>
            </Link>

            <Link to="/Control_system/ListComments" className='Block'>
                <a>| List comments |</a>
            </Link>

            <Link to="/" className='Block'>
                <a>| HomePage |</a>
            </Link>

            <Link to="/Login" className='Block' onClick={logout}>
                <a>| Sign off</a>
            </Link>
        </nav>
    )
}

export default Aside;