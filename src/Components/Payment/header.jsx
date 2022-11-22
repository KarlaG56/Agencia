import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header-payment-container">
                <div className="container-ttg">
                    <div className="image-logo-container">
                        <img src="/icon/Logo.svg" />
                    </div>
                    <Link to="/" className='Title_Payment'><h1>Payment methods✨</h1></Link>
                </div>
                
                <div className="container-home">
                    <div className="image-home-container">
                        <img src="/icon/Reservation.svg" />
                    </div>
                    <Link to="/" className='Title_Payment'>Home</Link>
                </div>
        </div>
    );
}
export default Header;