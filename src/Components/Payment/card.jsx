function cardPay(props) {
    return (
        <div className="payment-card">
            <br/><br/>
            <span>Card Number: {props.card}</span><br/>
            <span>Expiration Date: {props.date}</span><br />
            <span>Owner Name: {props.name}</span><br/>
            <span>CVV:{props.cvv}</span><br />
            <br/>
            <button className="DeleteMetodoDePago" onClick={() => {
                let link = "http://localhost:8080/payment/" + props.id;
                fetch(link,
                    {
                        method: 'DELETE',
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json",
                            "Authorization": window.localStorage.getItem("token")
                        }
                    })
                alert("Payment Delete")
            }}>Delete</button>
        </div>
    )
}
export default cardPay;