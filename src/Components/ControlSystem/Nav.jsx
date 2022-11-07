import { Link } from 'react-router-dom';

function Aside() {
    return (
        <nav className='Nav-controler'>

            <Link to="/Control_system/Ticket" className='Block'>
                <a>| Upload tickets |</a>
            </Link>

             <Link to="/Control_system/Employee" className='Block'>
                <a>| Register employee |</a>
            </Link>

            <Link to="/" className='Block'>
                <a>| HomePage |</a>
            </Link>

            <Link to="/Login" className='Block'>
                <a>| Sign off</a>
            </Link>


        </nav>
    )


}

export default Aside;