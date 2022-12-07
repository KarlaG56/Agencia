import {Link} from 'react-router-dom';
import {useState} from 'react'

function Data() {

    const [type, setType] = useState('')
    const [apiData, setApiData] = useState('')

    function getDestiny(){
        let link = "";
        switch (type) {
            case 'flight':
                link = 'http://localhost:8080/destination-type-of-trip-available/airplane';
                break;
            case 'cruise ship':
                link = 'http://localhost:8080/destination-type-of-trip-available/cruise ship';
                break;
            case 'bus':
                link = "http://localhost:8080/destination-type-of-trip-available/bus";
                break;
        }
        fetch(link)
        .then(response => response.json())
        .then(data => setApiData(data))
        .catch(err => console.log(err))
    }

    const HandleSubmit = (event) =>{
        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow',
            "Authorization": window.localStorage.getItem("token")
        };

        fetch("http://localhost:8080/destination", requestOptions)
            .then(response => response.text())
            .then(data => { alert(data) })
            .catch(error => console.log(error));

    }

    return (
        <div className="UploadTicket-container">
            <br/><br/>
            <h3 className="UploadTicket_titulo">Upload ticket</h3>

            <form className='UploadTicketForm' onSubmit={HandleSubmit}>

            <div>
                    <label id="origin">Seat</label><br />
                    <input className="placeUploadTicket" type="text" id='origin-seat' />
                    <button>Save</button>
                </div>

                <div >
                    <label id="class_type">Class Type</label><br />
                    <select className='SelectClassType'>
                        <option value="first">First class</option>
                        <option value="second">Executive class</option>
                        <option value="tird">Economy class</option>
                    </select>
                </div>
                <br />

                <div>
                    <label id="origin">Origin</label><br />
                    <input className="placeUploadTicket" type="text" />
                </div>
                <br />

                <div>
                    <label id="Check_in_time">Check in time</label><br />
                    <input className="placeUploadTicket" type="time" />
                </div>
                <br />

                <div>
                    <label id="deaperture_date">Deaperture date</label><br />
                    <input className="placeUploadTicket" type="date" />
                </div>
                <br />

                <div>
                    <label id="cost">Cost</label><br />
                    <input className="placeUploadTicket" type="number" min={0}/>
                </div>
                <br />

                <div>
                    <label id="type-trip">Type of trip</label>
                    <select id='selectTypeOfTrip' className="selectTypeoftrip" onChange={event => {setType(event.target.value)}}>
                    <option selected disabled>Select</option>
                        <option value="bus">bus</option>
                        <option value="airplane">plane</option>
                        <option value="cruise ship">ship</option>
                    </select>
                </div>
                <br/>
                
                <div>
                    <label id='destination'>Select your destination</label>
                    <select id='selectDestination' className='selectDestination' >
                        <option selected disabled>Select</option>
                        {
                            apiData && apiData.map(data =>(
                                <option value={data.id}>{data.state} {data.country} {data.city}</option>
                            ))
                        }
                    </select>
                </div>

                <br/>

                <div className="Create-button-container-UploadTicket">
                    <Link id="Create-UploadTicket-button" to="/">Upload</Link><br />
                </div>
            </form>
        </div>
    );
}
export default Data;