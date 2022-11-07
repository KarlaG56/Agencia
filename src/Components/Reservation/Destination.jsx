import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'

function Mostrar() {
    let params = useParams()
    const[img, setImg]=useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    useEffect(function () {
        fetch('http://localhost:8080/destination/' + params.id)
        .then(response => response.json())
        .then(data => {setImg(data.photography); setCity(data.city); setState(data.state); setCountry(data.country);})
        .catch(err => console.log(err));
    }, [])
    return(
        <div className="destination-info">
            <img src={img} alt={city} className="destination-img"/>
            <h1>{city}, {state}, {country}</h1>
        </div>
    )
}
export default Mostrar;