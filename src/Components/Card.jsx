import '../assets/Style/Card.css'
import {Link} from 'react-router-dom'

function Card(props) {
    const link=("/Reservation/" + props.id + "/" + props.type)
    return (
        <Link to={link}  id="reservation_section">
            <div className="card">
                <img src={props.src} alt={props.state} className="img-card" />
                <div className="info-card">
                    <h2>{props.city}, {props.state}</h2>
                    <h2>{props.country}</h2>
                </div>
            </div>
        </Link>
    )
}
export default Card;