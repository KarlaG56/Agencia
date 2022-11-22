import { useState, useContext } from 'react';
import UserContext from '../context/UserContext';
function Body() {

    const { user } = useContext(UserContext)

    const [cardNumber, setCardNumber] = useState('');
    const [ownerName, setOwnerName] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [cvv, setCvv] = useState('');

    const handleChangeCardNumber = (event) => { setCardNumber(event.target.value) }
    const handleChangeOwnerName = (event) => { setOwnerName(event.target.value) }
    const handleChangeExpirationDate = (event) => { setExpirationDate(event.target.value) }
    const handleChangeCvv = (event) => { setCvv(event.target.value) }

    const handleSubmit = (event) => {
        event.preventDefault();
        let link = "http://localhost:8080/payment/" + user.id
        fetch(link,
            {
                method: 'POST',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ownerName : ownerName,
                    cardNumber : cardNumber,
                    cvv: cvv,
                    expirationDate : expirationDate
                }),
            })
    }

    return (
        <div className="payment-container">
            <div className="payment-data-container">
                <form onSubmit={handleSubmit}>
                    <label id="card-number">Card number:<br /><input type="text" value={cardNumber} onChange={handleChangeCardNumber} /></label><br />
                    <label id="owner-name">Owner name:<br /><input type="text" value={ownerName} onChange={handleChangeOwnerName} /></label><br />
                    <label id="expiration-date">Expiration date:<br /><input type="date" value={expirationDate} onChange={handleChangeExpirationDate} /></label><br />
                    <label id="cvv">CVV:<br /><input type="text" value={cvv} onChange={handleChangeCvv} /></label><br />
                    <button>Add</button>
                </form>
            </div>
            <div className="payment-scroll-container">
                <div className="header-scroll">
                    <h1>Registered payment methods</h1>
                </div>
                <div className="content-scroll-container">
                    <div className="content-scroll-data">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body;