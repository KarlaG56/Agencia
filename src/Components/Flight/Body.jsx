import Card from "../Card";

function Body() {
    const item = [
        {
            img: "data:image/jpeg;base64,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",
            destination: "Cancun"
        }
    ]
    return (
        <>
            <div className='Body'>

                <div>
                    <br />
                    <img src="/img/Map2.png" id="Map" />
                    <br />
                </div>



                <div className="Nacional">
                    <h2>Domestic flights</h2>

                </div>



            </div>

            <div className="container-destination">
                {item.map((item)=>(
                    <Card
                    src={item.img}
                    destination={item.destination}
                    />
                ))}
            </div>

        </>

    )
}

export default Body;