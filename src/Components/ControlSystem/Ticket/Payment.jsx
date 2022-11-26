import {Link} from 'react-router-dom';

function Data() {
    return (
        <div className="UploadTicket-container">
            <h3 className="UploadTicket_titulo">Upload ticket</h3>

            <form className='UploadTicketForm'>
                <div>
                    <label id="seat_number">Number of Seat</label><br />
                    <input className="placeUploadTicket" type="number"  min={0} max={36}/>
                </div>
                <br />

                <div >
                    <label id="class_type">Class Type</label><br />
                    <select className='SelectClassType'>
                        <option value="Low">First class</option>
                        <option value="Low">Executive class</option>
                        <option value="Low">Economy class</option>
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
                    <label id="cost">payment</label><br />
                    <input className="placeUploadTicket" type="number" min={0}/>
                </div>
                <br />


                <div className="Create-button-container-UploadTicket">
                    <Link id="Create-UploadTicket-button" to="/">Reserver</Link><br />
                </div>
            </form>
        </div>
    );
}
export default Data;