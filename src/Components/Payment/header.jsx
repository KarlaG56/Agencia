import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header-payment-container">
                <div className="container-ttg">
                    <div className="image-logo-container">
                        <img src="/icon/Logo.svg" />
                    </div>
                    <Link to="/Payment" className='Title_Payment'>Payment methods✨</Link>
                </div>
                
                <div className="container-home">
                    <div className="image-home-container">
                        <img src="/icon/Reservation.svg" />
                    </div>
                    <Link to="/" className="Title_Payment-home">Home</Link>
                </div>
        </div>
    );
}
export default Header;