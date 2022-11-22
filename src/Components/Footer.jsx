import '../assets/Style/Footer.css'
import { Link } from 'react-router-dom';

function Footer() {
   
    return (
        <div className="Footer">
           <Link to="/About" id="About">
                <a>about us</a>
            </Link>
            <Link to="/Terms" id="Terms">
                <a>Terms</a>
            </Link>
            <Link to="/Policies" id="policies">
                <a>policies</a>
            </Link>
            <Link to="/Contact" id="contact">
                <a>Contact</a>
            </Link>
            <Link to="/Frequent" id="policies">
                <a>Frequent questions</a>
            </Link>
            <br>
            </br>
            <span id='copyright'>© Copyright 2022. All rights reserved. Developed by Touring The Globe✨.</span>
        </div>
    );
}
export default Footer;