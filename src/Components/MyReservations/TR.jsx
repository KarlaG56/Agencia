import { useState, useContext, useEffect } from 'react'
import React from 'react';
import { useTheme } from "../../hooks/Theme";
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
function TR(props) {
    const [link, setLink] = useState(null)
    const [linkC, setLinkC] = useState(null)
    const [apiPay, setApiPay] = useState(null)
    const [apiTicket, setApiTicket] = useState(null)
    const [openPay, setOpenPay] = useState(null)
    const [openShow, setOpenShow] = useState(null)
    const [payment, setPayment] = useState(null)
    const handleClickPay = () => { setOpenPay(true) }
    const handleClosePay = () => { setOpenPay(false) }
    const handleCloseShow = () => { setOpenShow(false) }
    const handleClickShowTickets = () => {
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
        fetch(link)
            .then(response => response.json())
            .then(data => { setApiTicket(data); setOpenShow(true) })
            .catch(error => console.log(error))
    }

    const createTable = () => {
        return (
            <table className='table-show2'>
                <tr className='back-show-tr'>
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
                            <th><span>{tickets.seatNumber}</span></th>
                            <th><span>{tickets.classType}</span></th>
                            <th><span>{tickets.departureDate}</span></th>
                            <th><span>{tickets.checkInTime}</span></th>
                            <th><span>{tickets.origin}</span></th>
                            <th><span>{props.destination}</span></th>
                        </tr>
                    ))
                }
            </table>
        )
    }

    const handleClickCancel = () => {
        switch (props.typeOfTrip) {

            case 'flight':
                setLinkC("http://localhost:8080/reservation-status/airplane/" + props.id);
                break;
            case 'cruise ship':
                setLinkC("http://localhost:8080/reservation-status/cruice-ship/" + props.id);
                break;
            case 'bus':
                setLinkC("http://localhost:8080/reservation-status/bus/" + props.id);
                break;
        }
        console.log(linkC);
        var requestOptions = {
            method: 'PUT',
            redirect: 'follow',
            "Authorization": window.localStorage.getItem("token")
        };
        fetch(linkC,
            requestOptions
        ).then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    const handleClickPayOut = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            status: "Pay out",
            payment: payment
        });

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
            "Authorization": window.localStorage.getItem("token")
        };

        fetch("http://localhost:8080/reservation-status/" + props.id, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        fetch("http://localhost:8080/payment/" + props.userId)
            .then(response => response.json())
            .then(data => setApiPay(data))
            .catch(err => console.log(err))
    }, []
    )
    const paymentOptions = () => {
        return (
            apiPay && apiPay.map(payment => (
                <option value={payment.id}>{payment.cardNumber}</option>
            ))
        )
    }

    return (
        <tr className='card-tickets-inf'>
            <th>{props.destination}</th>
            <th>{props.typeOfTrip}</th>
            <th>{props.reservationDate}</th>
            <th>{props.cost}</th>
            {
                props.status == "Cancelled" ?
                    <th>Cancelled</th>
                    :
                    <th><button onClick={handleClickCancel} className='cancelled'>Cancel</button></th>
            }
            {

                props.status == "Not payed" ?
                    <th >
                        <button onClick={handleClickPay} className="button-pay">Pay</button>
                        <Dialog open={openPay} onClose={handleClosePay}>
                            <DialogTitle>Pay Reservation</DialogTitle>
                            <DialogContent>
                                <DialogContentText>Please select your payment type</DialogContentText>
                                <select id="paymentTypeSelect" value={payment} onChange={c => setPayment(c.target.value)}>
                                    <option disabled selected>-------Select payment-------</option>
                                    {
                                        paymentOptions()
                                    }
                                </select>
                            </DialogContent>
                            <DialogActions>
                                <button onClick={handleClickPayOut} className="button-pay2" >Pay</button>
                            </DialogActions>
                            <DialogActions>
                                <button onClick={handleClosePay} className="cancelled2" >Cancel</button>
                            </DialogActions>
                        </Dialog>
                    </th>
                    :
                    props.status == "Pay out" ?
                        <th>Paid out</th>
                        :
                        <th>Cancelled</th>
            }
            {
                props.status == "Cancelled" ?
                    <th >Cancelled</th>
                    :
                    <th >
                        <button onClick={handleClickShowTickets} className="button-show">Show tickets</button>
                        <Dialog open={openShow} onClose={handleCloseShow}>
                            <DialogTitle>Show tickets</DialogTitle>
                            <DialogContent className='table-show'>
                                {createTable()}
                            </DialogContent>
                            <DialogActions>
                                <button onClick={handleCloseShow} className="cancelled" >Close</button>
                            </DialogActions>
                        </Dialog>
                    </th>

            }
        </tr>
    )
}
export default TR;