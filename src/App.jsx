
import Login from "./Components/Page/Login";
import Register from "./Components/Page/Register";
import Home from "./Components/Page/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CruiceShip from "./Components/Page/CruiceShip";
import Airplane from "./Components/Page/Flight";
import Bus from "./Components/Page/Bus";
import Reservation from "./Components/Page/Reservation";
import Controler_ticket from "./Components/Page/Controler-ticket"
import Controler_destiny from "./Components/Page/Controler-destiny"
import Controler_Employee from "./Components/Page/Controler-Employee"
import { UserContext } from "./Components/context/context"
import React, { useState } from 'react'
import Control from "./Components/Page/Control-System"
import MyReservations from "./Components/Page/MyReservation"
import Payment from "./Components/Page/Payment"

function App() {
    const [user, setUser] = useState(null);

    return (
        <BrowserRouter>
            <UserContext.Provider value={{ user, setUser }}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Login' element={<Login />} />
                    <Route path='/Home' element={<Home />} />
                    <Route path='/Airplane' element={<Airplane />} />
                    <Route path='/Cruice' element={<CruiceShip />} />
                    <Route path='/Bus' element={<Bus />} />
                    <Route path='/Register' element={<Register/>} />
                    <Route path='/Reservation/:id/:type' element={<Reservation/>} />
                    <Route path='/Control_system' element={<Control/>} />
                    <Route path='/Control_system/Ticket' element={<Controler_ticket />} />
                    <Route path='/Control_system/Destination' element={<Controler_destiny />} />
                    <Route path='/Control_system/Employee' element={<Controler_Employee />} />
                    <Route path='/My_Reservations' element={<MyReservations/>} />
                    <Route path="/Payment" element={<Payment/>} />
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    )
    //Reservation/:id/:type
}
export default App;
