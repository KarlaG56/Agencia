
import { useState } from 'react'

function Body_destiny() {
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [file, setFile] = useState('');
    function handleSubmit(event) {
        event.preventDefault();
        const input = document.getElementById('input-file');
        var formdata = new FormData();
        formdata.append("city", city);
        formdata.append("state", state);
        formdata.append("country", country);
        formdata.append("file", input.files[0]);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/destination", requestOptions)
            .then(response => response.text())
            .then(data => { alert(data) })
            .catch(error => console.log(error));


        // console.log(file[0])
        // var data = new FormData();
        // data.append('city', city);
        // data.append('state', state);
        // data.append('country', country);
        // data.append('file', file);
        // event.preventDefault();
        // const option = {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: data
        //     // body: JSON.stringify({
        //     //     city:city,
        //     //     state:state,
        //     //     country:country,
        //     //     file:file
        //     // })
        // }
        // fetch('http://localhost:8080/destination', option)
        //     .then(response => response.json())
        //     .then(data => setApiData(data))
        //     .catch(err => console.log(err));
        // console.log(apiData)
    }
    return (
        <div className='form-container'>
            <h1 id='title-destinity'>Load Destinity</h1>
            <form className="Body-Controller" onSubmit={handleSubmit}>
                <label htmlFor="city" id='city'>City:</label><br />
                <input type="text" id='input-city' value={city} onChange={(event) => { setCity(event.target.value) }} /><br />
                <label htmlFor="state" id='state'>State:</label><br />
                <input type="text" id='input-state' value={state} onChange={(event) => { setState(event.target.value) }} /><br />
                <label htmlFor="country" id='country'>Country:</label><br />
                <input type="text" id='input-country' value={country} onChange={(event) => { setCountry(event.target.value) }} /><br />
                <label htmlFor="file" id='file'>Image:</label><br />
                <input type="file" id="input-file" value={file} onChange={(event) => { setFile(event.target.value) }} /><br />
                <button id='button-save'>Save</button>
            </form>
        </div>
    )
}

export default Body_destiny;