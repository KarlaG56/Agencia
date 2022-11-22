import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CardReservation } from './CardReservation'
import { CardReservation2 } from './CardReservation2'

function ReservationTickets() {
    /*let link = '';
    let params = useParams();
    const [fecha, setFecha] = useState('');
    const [origins, setOrigins] = useState('');
    const [origin, setOrigin] = useState('');
    const [apiData, setApiData] = useState('')
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

    //if (params.type) {}
    useEffect(function () {
        fetch(link)
            .then(response => response.json())
            .then(data => {setApiData(data)})
            .catch(err => console.log(err))
    })
    console.log(apiData)*/
    return (
        <>
        <div className='Form-reservation-container'>
            <form action="" className='formReserver'>
                <h3 className='Reserve'>Reserver</h3>
                <br />
                <label id='label-date'>Departure Date:</label>
                <input type="date" id='input-date' /><br />

                <label id='label-originReservation'>Origin:</label>
                <select name="origin" id="select-origin">
                    <option className='Select_origin' disabled selected>Select origin</option>
                    <option className='Tuxtla_Gtz' value="Tuxtla">Tuxtla Gtz, Chiapas</option>
                </select><br />

                <label id='label-classType'>Class type:</label>
                <select name="class" id="select-classType">
                    <option disabled selected>Select class</option>
                    <option value="Turista">Económica</option>
                    <option value="Turista">Turista</option>
                    <option value="Ejecutiva">Ejecutiva</option>
                </select><br />

                <label id='label-departureTime'>Departure time:</label>
                <input type="time"id="input-departureTime" />
                <button id='button-reservation-save'>Save</button>
            </form>
        </div>
        <h1 className='TituloMapaAsientos'>Plane seat map</h1>
        <div className='img_MapaAsientos'>
            <img src='/img/MapaAsientosAvion.png'/>
            {CardReservation.map ((item) => {
                return(
                    <button key={item.id} id={item.clase} className={item.class}></button>
                )
            })}
            {CardReservation2.map ((item) => {
                return(
                    <button key={item.id} id={item.clase} className={item.class}></button>
                )
            })}
        </div>
        </>
        
    )
}
export default ReservationTickets;

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
