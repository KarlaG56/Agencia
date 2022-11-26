import '../assets/Style/Footer.css'
import { Link } from 'react-router-dom';

function Footer() {

    return (
        <>
            <div className="Footer">

                <div className='div-section'>
                    <h3 className='title-sections'>Business</h3>
                    <Link to="/About" id="text">
                        <a >About us</a>
                    </Link>
                    <Link to="/Contact" id="text">
                        <a >Contact us</a>
                    </Link>
                </div>

                <div className='div-section'>
                    <h3 className='title-sections'>Legal</h3>
                    <Link to="/Terms" id="text">
                        <a >Terms</a>
                    </Link>
                    <Link to="/Policies" id="text">
                        <a id='policies'>privacy policies</a>
                    </Link>
                </div>

                <div className='div-section'>
                    <h3 className='title-sections'>Help</h3>
                    <Link to="/Frequent" id="text">
                        <a id='frequent'>Frequent questions</a>
                    </Link>
                </div>


                <div className='div-section'>
                
                    <h3 className='title-sections'>Social networks</h3>

                    <Link >
                        <img className='Card-networks-1' src="/icon/Facebook.svg" alt="" />
                    </Link>
                    
                    <Link>
                        <img className='Card-networks-2' src="/icon/Instagram.svg" alt="" />
                    </Link>

                    <Link>
                        <img className='Card-networks-3' src="/icon/WhatsApp.svg" alt="" />
                    </Link>

                </div>

                <div >
                    <div class="copyright">
                    © Copyright 2022. All rights reserved. Developed by Touring The Globe✨
                    </div>
                </div>
            </div>

        </>
    );
}
export default Footer;

//<span id='copyright'>© Copyright 2022. All rights reserved. Developed by Touring The Globe✨.</span>