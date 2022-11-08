import { useState } from 'react'

function TypeOfTrip() {
    const [id, setId] = useState('');
    const handleChangeAp = () => {
        const option = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                destination:id,
                typeOfTrip:"1"
            })
        }
        fetch("http://localhost:8080/destination-type-of-trip-available",option)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }
    const handleChangeCS = () => {
        const option = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                destination:id,
                typeOfTrip:"2"
            })
        }
        fetch("http://localhost:8080/destination-type-of-trip-available",option)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }
    const handleChangeB = () => {
        const option = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                destination:id,
                typeOfTrip:"3"
            })
        }
        fetch("http://localhost:8080/destination-type-of-trip-available",option)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }

    return(
        <form id='form-destination-id'>
            <h1 id='title-id'>Assign trip type to destination</h1>
            <label htmlFor="" id='label-input-target'>Id destination:</label>
            <input id='input-target' value={id} onChange={(event) => {setId(event.target.value)}}/><br/>

            <label htmlFor="" id='label-target'>Select Type of Trip:</label>
            <label id='input-airplane'><input type="radio" onChange={handleChangeAp} /><span>Airplane</span></label>
            <label id='input-bus'><input type="radio" onChange={handleChangeB} /><span>Bus</span></label>
            <label id='input-cruise'><input type="radio" onChange={handleChangeCS} /><span>Cruise</span></label><br />
            <button id='button-reset-id'>Reset</button>
        </form>
    )
}
export default TypeOfTrip;