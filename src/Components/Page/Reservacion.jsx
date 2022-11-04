import Header from "../Header";
import Body from "../Reservacion/Background";

import Footer from "../Footer";

import '../../assets/Style/TicketRegister.css'



function Flight() {
    return (
        <>
            <Header />
            <div className="Ticket-Body">
                <Body/>
            </div>
            <Footer />
        </>

    )
}

export default Flight;