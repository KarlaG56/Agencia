import Card from "../Card";
import { useState, useEffect } from "react"
function Body() {
    const [apiData, setApiData] = useState(null);
    useEffect(function () {
        fetch('http://localhost:8080/destination-type-of-trip-available/cruise ship')
            .then(response => response.json())
            .then(data => setApiData(data))
            .catch(err => console.log(err));
    }, [])

    return (
        <>
            <div className='Body'>

                <div>
                    <br />
                    <img src="/img/Map2.png" id="Map" />
                    <br />
                </div>

                <div className="Nacional">
                    <h2>Cruice Ship</h2>

                </div>
            </div>

            <div className="container-destination">
                {
                    apiData && apiData.map(destinations => (
                        <Card
                            key={destinations.id}
                            type="cruise ship"
                            id={destinations.id}
                            city={destinations.city}
                            state={destinations.state}
                            country={destinations.country}
                            src={destinations.photography}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default Body;