import { useState, useContext, useEffect} from 'react'
import UserContext from '../context/UserContext';
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
    console.log(apiData)
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
                </tr>
                {
                    apiData && apiData.map((reservation, index) => (
                        <tr>
                            <th>{reservation.destination}</th>
                            <th>{reservation.typeOfTrip}</th>
                            <th>{reservation.reservationDate}</th>
                            <th>{reservation.cost}</th>
                            {
                                reservation.status == "Cancelado" ?
                                <th>Cancelado</th>
                                :
                                <th><button>Cancelar</button></th>
                            }
                            {
                                reservation.status == "No pagado" ?
                                <th><button>Pagar</button></th>
                                :
                                reservation.status = "Pagado" ?
                                <th>Pagado</th>
                                :
                                <th>Cancelado</th>
                            }
                        </tr>
                    ))
                }
            </table>
        </div>
    );
}
export default Body;