function Data() {
    const data = [
        {
            id: 1,
            data: "departure date",
            type: "date",
            name: "Email"
        },
        {
            id: 2,
            data: "employee",
            type: "text",
            name: "Email"
        },
       
        {
            id: 4,
            data: "state",
            type: "text",
            name: "Email"
        },
        {
            id: 5,
            data: "country",
            type: "text",
            name: "Email"

        }
    ]

    return (
        <div className="Ticket-container">
            <h3>Ticket register</h3>
            {data.map ((elemento, i) => {
                return(
                    <div key={i} className="form">
                        <label id={elemento.name}>{elemento.data}:</label><br />
                        <input className="place" type={elemento.type} />
                    </div>  
                )
            })}
            <h4>type of payment</h4>
            <select>
                <option disabled selected>select payment</option>
                <option value={"Credit/Debit card"}>Credit/Debit Card</option>
                <option value={"Cash payment"}>Cash payment</option>
            </select>
            <h4>type of trip</h4>
            <select>
                <option disabled selected>select trip</option>
                <option value={"Credit/Debit card"}>bus</option>
                <option value={"Cash payment"}>plane</option>
                <option value={"Credit/Debit card"}>cruisine</option>
                <option value={"Cash payment"}>train</option>
            </select>
           
        </div>
    );
}

export default Data;