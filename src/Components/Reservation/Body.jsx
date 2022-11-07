import '../../assets/Style/Reservation.css'
import {useParams} from 'react-router-dom'
import Destination from './Destination'
import ReservationTickets from './ReservationTickets'



function Body() {
    let params = useParams();
    return (
        <div className="reservation-body">
            <Destination/>
            <ReservationTickets/>
        </div>
    )

}

export default Body;