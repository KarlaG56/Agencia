import '../assets/Style/NotPage.css'
import { Link } from 'react-router-dom';

function NotAuthorized(){
    return(
        <div className="container-NotPage">
            <div className='Error'>
                <img src="/img/member.png" id='Error-img'/>
               <h1 id='Error-title'>ERROR 404</h1> 
               <p id='Error-text'>Sorry, page not found.</p>
               <Link to="/" ><button className='button-Notpage'>Take home</button></Link> 
            </div>
        </div>
    )
}

export default NotAuthorized;