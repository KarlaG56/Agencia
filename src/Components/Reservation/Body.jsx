import '../../assets/Style/Reservation.css'


function Body() {
    return (
        <form className="Form-reservation">
            <div className='row-1'>
                <div className='colum-1'>
                    <label >Email</label><br />
                    <input type="text" />
                </div>

                <div className='colum-1'>
                <label >Emaiksksl</label><br />
                <input type="text" />
                </div>
               
            </div>
            <br />

            <div className='row-2'>
                <label >Password</label><br />
                <input type="password" />
            </div>


        </form>
    )

}

export default Body;