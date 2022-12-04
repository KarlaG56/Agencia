function cardPay(props) {
    return (
        <div className="payment-card">
            <span>Card Number: {props.card}</span>
            <span>Expiration Date: {props.date}</span><br />
            <span>Owner Name: {props.name}</span>
            <span>CVV:{props.cvv}</span><br />
            <button className="DeleteMetodoDePago" onClick={() => {
                let link = "http://localhost:8080/payment/" + props.id;
                fetch(link,
                    {
                        method: 'DELETE',
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json"
                        }
                    })
                alert("Payment Delete")
            }}>Delete</button>
        </div>
    )
}
export default cardPay;