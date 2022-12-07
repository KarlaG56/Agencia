import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import UserContext from '../context/UserContext';


function ReservationTickets() {
    const { user } = useContext(UserContext);
    const time = Date.now();
    const today = new Date(time)
    let link = '';
    let params = useParams();
    const [fecha, setFecha] = useState('');
    const handleChangeFecha = (event) => { setFecha(event.target.value); console.log(event.target.value) }
    const [origin, setOrigin] = useState('');
    const handleChangeOrigin = (event) => { setOrigin(event.target.value); console.log(event.target.value) }
    const [classType, setClassType] = useState('');
    const handleChangeClassType = (event) => { setClassType(event.target.value); console.log(event.target.value) }
    const [checkInTime, setCheckInTime] = useState('');
    const handleChangeCheckInTime = (event) => { setCheckInTime(event.target.value); console.log(event.target.value) }
    const [apiData, setApiData] = useState('');
    const [howMany, setHowMany] = useState(0);
    const handleChangeSeats = (event) => {
        setHowMany(event.target.value)
    }
    switch (params.type) {
        case 'flight':
            link = 'http://localhost:8080/ticket-airplane/' + params.id;
            break;
        case 'cruise ship':
            link = 'http://localhost:8080/ticket-cruise-ship/' + params.id;
            break;
        case 'bus':
            link = "http://localhost:8080/ticket-bus/" + params.id;
            break;
    }

    const reserv = (event) => {
        event.preventDefault();
        console.log(event)
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
            "reservationDate": today.toLocaleDateString(),
            "destination": params.destiny,
            "typeOfTrip": params.type
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        fetch("http://localhost:8080/reservation/" + user.id, requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                switch (params.type) {
                    case 'flight':
                        var requestOptions = {
                            method: 'PUT',
                            body: raw,
                            redirect: 'follow'
                          };
                        for(let i = 0; i < event.target.length; i++) {
                            fetch("http://localhost:8080/ticket-airplane/" + event.target[i].value + "/" + data.id, requestOptions)
                        }
                        break;
                    case 'cruise ship':
                        var requestOptions = {
                            method: 'PUT',
                            body: raw,
                            redirect: 'follow'
                          };
                        for(let i = 0; i < event.target.length; i++) {
                            fetch("http://localhost:8080/ticket-cruise-ship/" + event.target[i].value+ "/" + data.id, requestOptions)
                            .then(response => response.json())
                            .then(data => console.log(data))
                        }
                        break;
                    case 'bus':
                        var requestOptions = {
                            method: 'PUT',
                            body: raw,
                            redirect: 'follow'
                          };
                        for(let i = 0; i < event.target.length; i++) {
                            fetch("http://localhost:8080/ticket-bus/" + event.target[i].value+ "/" + data.id, requestOptions)
                            .then(response => response.json())
                            .then(data => console.log(data))
                        }
                        break;
                }
                var requestOptions = {
                    method: 'PUT',
                    body: raw,
                    redirect: 'follow'
                  };
                fetch('http://localhost:8080/reservation/'+data.id, requestOptions)
            })
            .catch(error => console.log('error', error));
    }

    const generatedSelect = () => {
        let seatsSelected = [];
        let selects = []
        if (howMany <= apiData.length) {
            
            for (let i = 0; i < howMany; i++) {
                selects.push(
                    <select onChange={event => { seatsSelected.push(event.target.value); console.log(seatsSelected) }}>
                        <option selected disabled>----Select----</option>
                        {
                            apiData && apiData.map(data => (
                                <option value={data.id}>{data.seatNumber}</option>
                            ))
                        }
                    </select>
                )
            }
        }
        return (
            <form onSubmit={reserv}>
                {
                    selects
                }
                <button>Reserv</button>
            </form>
        )
    }

    const tickets = () => {
        switch (params.type) {
            case 'flight':
                return (
                    <>
                        <img src="/img/MapaAvion.png" className="img-bus" />
                        <br /><br />
                        <span className="questions-r">How many seats do you want?</span>
                        <br /><br />
                        <center><input type="number" value={howMany} onChange={handleChangeSeats}></input></center>

                        <br />
                        {
                            generatedSelect()
                        }
                        <button onClick={reserv}>reserv</button>
                    </>
                )
                break;
            case 'cruise ship':
                return (
                    <>
                        <span className="questions-r">How many seats do you want?</span>
                        <br /><br />
                        <center><input type="number" value={howMany} onChange={handleChangeSeats}></input></center>

                        <br />
                        {
                            generatedSelect()
                        }
                    </>
                )
                break;
            case 'bus':
                return (
                    <>
                        <img src="/img/MapaAutobus.jpg" className="img-bus" />
                        <br /><br />
                        <span className="questions-r">How many seats do you want?</span>
                        <br />
                        <center><input className="select-trasport" type="number" value={howMany} onChange={handleChangeSeats}></input></center>
                        <br />
                        {
                            generatedSelect()
                        }
                    </>
                )
                break;
        }
    }

    const handleFilter = (event) => {
        event.preventDefault();
        const data1 = apiData.filter(apiData => apiData.origin === origin && apiData.checkInTime === checkInTime && apiData.departureDate === fecha && apiData.classType === classType)
        /*for(let i = 0; i <apiData.length; i++) {
            if(apiData[i].origin === origin && apiData[i].checkInTime === checkInTime && apiData[i].departureDate === fecha && apiData[i].classType === classType) {
                console.log(apiData[i])
            }else{
                delete apiData[i];
            }
        }*/
    }

    //if (params.type) {}
    useEffect(function () {
        fetch(link)
            .then(response => response.json())
            .then(data => { setApiData(data); })
            .catch(err => console.log(err))
    }, [])
    console.log(apiData)



    return (
        <>
            <div className='Form-reservation-container'>
                <form onSubmit={handleFilter} className='formReserver'>
                    <h3 className='Reserve'>Reserver</h3>
                    <br />
                    <label id='label-date'>Departure Date:</label>
                    <input type="text" id='input-date' value={fecha} onChange={handleChangeFecha} /><br />

                    <label id='label-originReservation'>Origin:</label>
                    <input type="text" id='input-originReservation' value={origin} onChange={handleChangeOrigin} />
                    <br />

                    <label id='label-classType'>Class type:</label>
                    <select name="class" id="select-classType" onChange={handleChangeClassType}>
                        <option disabled selected>Select class</option>
                        <option value="tird">Económica</option>
                        <option value="second">Turista</option>
                        <option value="first">Ejecutiva</option>
                    </select><br />

                    <label id='label-departureTime' >Departure time:</label>
                    <input type="text" id="input-departureTime" value={checkInTime} onChange={handleChangeCheckInTime} />
                    <button id='button-reservation-save'>Save</button>
                </form>
            </div>
            {
                apiData != null ?
                    tickets()
                    :
                    alert("Not found")
            }
        </>

    )
}
export default ReservationTickets;

/*
for (var i = 0; i < 6; i++){
        var object = {
            id: i,
            class: "btn-place-airplane",
            className: "airplane-seccion1"
        }
        Seat1.push(object);
    }
*/

/*
 {CardReservation.map ((item) => {
                    return(
                        <button key={item.id} id={item.clase} className={item.class}></button>
                    )
                })}
*/

/* <form className="form-reservation">
            <h3 className='TitleReserver'>Reserver</h3><br/>

            <div className='campos'>
                
             <label className='OrginParte'>   
            <span>Departure Date</span>
            <input className='date' type="date" />
            </label> 


            <label className='OrginParte'>
            <span>Origin</span>
            <select className='SelectReservation1'>
                <option className='Select_origin' disabled selected>Select origin</option>
                <option className='Tuxtla_Gtz'  value="Tuxtla">Tuxtla Gtz, Chiapas</option>
            </select>
            </label>

            <label className='OrginParte'>
            <span>Class type</span>
            <select className='SelectReservation2' >
                <option disabled selected>Select class</option>
                <option value="Turista">Turista</option>
                <option value="Ejecutiva">Ejecutiva</option>
            </select>

            </label>

            <label className='OrginParte'>
            <span>Seat number</span>
            <select className='SelectReservation3'>
                <option disabled selected>Select class</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            </label>

            </div>
        </form> */
