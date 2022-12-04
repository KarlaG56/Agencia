import { useState } from "react";
const createTable = ({props}) => {
    const [apiTicket, setApiTicket] = useState(null)
    const [link, setLink] = useState(null);
    switch (props.typeOfTrip) {

        case 'flight':
            setLink('http://localhost:8080/ticket-airplane/reservation/' + props.id);
            break;
        case 'cruise ship':
            setLink('http://localhost:8080/ticket-cruise-ship/reservation/' + props.id);
            break;
        case 'bus':
            setLink("http://localhost:8080/ticket-bus/reservation/" + props.id);
            break;
    }
    console.log(link)
    fetch(link)
        .then(response => response.json())
        .then(data => setApiTicket(data))
        .catch(error => console.log(error))
    return (
        <table>
            <tr>
                <th>Number</th>
                <th>Class</th>
                <th>Departure Date</th>
                <th>Check in time</th>
                <th>Origin</th>
                <th>Destination</th>
            </tr>
            {
                apiTicket && apiTicket.map(tickets => (
                    <tr>
                        <th>{tickets.seatNumber}</th>
                        <th>{tickets.classType}</th>
                        <th>{tickets.departureDate}</th>
                        <th>{tickets.checkInTime}</th>
                        <th>{tickets.origin}</th>
                        <th>{props.destination}</th>
                    </tr>
                ))
            }
        </table>
    )
}
export default createTable;