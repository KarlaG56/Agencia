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
                </div>

                <div className='div-section'>
                    <h3 className='title-sections'>Legal</h3>
                    <Link to="/Terms" id="text">
                        <a >Terms</a>
                    </Link>
                    <Link to="/Policies" id="text">
                        <a id='policies'>Privacy policies</a>
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

                    <div className='social_networks'>
                        <a href='https://www.facebook.com/profile.php?id=100088589435072' title='face'><img className='Card-networks-1' src="/icon/Facebook.svg" alt="face" /></a>



                        <a href='https://www.instagram.com/thouringtheglobe/' title="instagram"> <img className='Card-networks-2' src="/icon/Instagram.svg" alt="instagram" /></a>


                        <a href='https://api.whatsapp.com/send?phone=%2B529615615901&text=Welcome+to+the+agency%3A+Touring+the+globe%F0%9F%8C%8E%E2%9C%A8' title='what'><img className='Card-networks-3' src="/icon/WhatsApp.svg" alt='what' /></a>


                    </div>

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