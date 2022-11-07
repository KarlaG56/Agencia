import '../assets/Style/Card.css'

function Card(props) {
    return (
        <div className="card">
            <img src={props.src} alt={props.destination} className="img-card" />
            <div className="info">
                <h2>{props.destination}</h2>
            </div>
        </div>
    )
}
export default Card;