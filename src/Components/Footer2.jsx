import '../assets/Style/Footer.css'
import { Link } from 'react-router-dom';

function Footer() {
   
    return (
        <div className="Footer">
            
            <div className='business'>
            <span>business</span>
                <Link to="/About" id="About">
                <a id='about'>about us</a>
            </Link>
            <Link to="/Contact" id="contact">
                <a id='contact'>Contact us</a>
            </Link>
            </div>
            <div className='legal'>
                <span>legal</span>
                <Link to="/Terms" id="Terms">
                <a id='terms'>Terms</a>
            </Link>
            <Link to="/Policies" id="policies">
                <a id='policies'>privacy policies</a>
            </Link> 
            </div>
            <div className='help'>
            <span>help</span>
                <Link to="/Frequent" id="frequent">
                <a id='frequent'>Frequent questions</a>
                </Link>
            </div>
            <br/>
            <span id='copyright'>© Copyright 2022. All rights reserved. Developed by Touring The Globe✨.</span>
        </div>
    );
}
export default Footer;