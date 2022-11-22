import '../assets/Style/NotPage.css'
import { Link } from 'react-router-dom';

function NotAuthorized(){
    return(
        <div className="container-NotPage">
            <div className='Error2'>
                <img src="/img/member.png" id='Error-img2'/>
               <h1 id='Error-title2'>ERROR 401</h1> 
               <p id='Error-text2'>Sorry, but you do not have permission for this page.</p>
               <Link to="/" ><button className='button-Notpage'>Take home</button></Link> 
            </div>
        </div>
    )
}

export default NotAuthorized;