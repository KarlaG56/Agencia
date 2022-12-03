import { useState, useContext, useEffect } from 'react';
import UserContext from '../context/UserContext';
import Card from './card'
function Body() {

    const { user } = useContext(UserContext)

    const [cardNumber, setCardNumber] = useState('');
    const [ownerName, setOwnerName] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [paymentData, setPaymentData] = useState(null);

    const handleChangeCardNumber = (event) => { setCardNumber(event.target.value) }
    const handleChangeOwnerName = (event) => { setOwnerName(event.target.value) }
    const handleChangeExpirationDate = (event) => { setExpirationDate(event.target.value) }
    const handleChangeCvv = (event) => { setCvv(event.target.value) }

    useEffect(function () {
        let l = "http://localhost:8080/payment/" + user.id
        fetch(l)
            .then(response => response.json())
            .then(data => { setPaymentData(data); })
            .catch(err => console.log(err))
    }, [])

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
                    ownerName: ownerName,
                    cardNumber: cardNumber,
                    cvv: cvv,
                    expirationDate: expirationDate
                }),
            })
    }

    return (
        <div className="payment-container">
            <div className="payment-data-container">
                <div className="payment-data-container2">
                <br/>
                        <div >
                            <h1>Registered payment methods</h1>
                        </div>
                    <form onSubmit={handleSubmit} >
                        
                        <label id="card-number">Card number:<br /><input type="text" value={cardNumber} onChange={handleChangeCardNumber} /></label><br />
                        <label id="owner-name">Owner name:<br /><input type="text" value={ownerName} onChange={handleChangeOwnerName} /></label><br />
                        <label id="expiration-date">Expiration date:<br /><input type="date" value={expirationDate} onChange={handleChangeExpirationDate} /></label><br />
                        <label id="cvv">CVV:<br /><input type="text" value={cvv} onChange={handleChangeCvv} /></label><br />
                        <button>Add</button>
                    </form>
                </div>

            </div>
            <div className="payment-scroll-container">
                <div className="header-scroll">
                    <h1>Registered payment methods</h1>
                </div>
                <div className="content-scroll-container">
                    <div className="content-scroll-data">
                        {
                            paymentData && paymentData.map(pays => (
                                <Card
                                    key={pays.id}
                                    card={pays.cardNumber}
                                    date={pays.expirationDate}
                                    name={pays.ownerName}
                                    cvv={pays.cvv}
                                    id={pays.id}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body;