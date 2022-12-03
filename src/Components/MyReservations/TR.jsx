import { useState, useContext, useEffect } from 'react'
import React from 'react';
import { useTheme } from "../../hooks/Theme";
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
function TR(props) {
    const [apiPay, setApiPay] = useState(null)
    const [openPay, setOpenPay] = useState(null)
    const [payment, setPayment] = useState(null)
    const handleClickPay = () => { setOpenPay(true) }
    const handleClosePay = () => { setOpenPay(false) }

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
            redirect: 'follow'
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
        <tr>
            <th>{props.destination}</th>
            <th>{props.typeOfTrip}</th>
            <th>{props.reservationDate}</th>
            <th>{props.cost}</th>
            {
                props.status == "Cancelled" ?
                    <th>Cancelled</th>
                    :
                    <th><button >Cancel</button></th>
            }
            {

                props.status == "Not payed" ?
                    <th>
                        <button onClick={handleClickPay}>Pay</button>
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
                                <button onClick={handleClickPayOut}>Pay</button>
                            </DialogActions>
                            <DialogActions>
                                <button onClick={handleClosePay}>Cancel</button>
                            </DialogActions>
                        </Dialog>
                    </th>
                    :
                    props.status = "Paid out" ?
                        <th>Paid out</th>
                        :
                        <th>Cancelled</th>
            }
            {
                props.status == "cancelled" ?
                    <th>Cancelled</th>
                    :
                    <th><button>Show tickets</button></th>
            }
        </tr>
    )
}
export default TR;