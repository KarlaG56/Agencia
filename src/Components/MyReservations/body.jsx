import { useState, useContext, useEffect } from 'react'
import UserContext from '../context/UserContext';
import TR from './TR'


function Body() {
    const [apiData, setApiData] = useState(null)
    const { user } = useContext(UserContext);
    let link = "http://localhost:8080/reservation/" + user.id;

    useEffect(function () {
        fetch(link)
            .then(response => response.json())
            .then(data => setApiData(data))
            .catch(err => console.log(err));
    }, [])
    return (
        <div className="table-container">
            <table className="table-reservation">
                <tr id="header-table">
                    <th>Destination</th>
                    <th>Transport</th>
                    <th>Date</th>
                    <th>Cost</th>
                    <th>Status</th>
                    <th>Pago</th>
                    <th>Boletos</th>
                </tr>
                {
                    apiData && apiData.map((reservation) => (
                        <TR
                            id={reservation.id}
                            userId={user.id}
                            destination={reservation.destination}
                            typeOfTrip={reservation.typeOfTrip}
                            reservationDate={reservation.reservationDate}
                            cost={reservation.cost}
                            status={reservation.status}
                        />
                    ))
                }

            </table>
            <br/>
        </div>
    );
}
export default Body;