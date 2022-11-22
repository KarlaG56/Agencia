function Body() {
    return (
        <div className="payment-container">
            <div className="payment-data-container">
                <label id="card-number">Card number:<br/><input type="text" /></label><br />
                <label id="owner-name">Owner name:<br/><input type="text" /></label><br />
                <label id="expiration-date">Expiration date:<br/><input type="date" /></label><br />
                <label id="cvv">CVV:<br/><input type="text" /></label>
            </div>
            <div className="payment-scroll-container">
                <div className="content-scroll-data">
                    <h1>Registered payment methods</h1><br />
                    
                </div>
            </div>
        </div>
    );
}

export default Body;