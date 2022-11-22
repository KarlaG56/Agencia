
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
import UserContext from "./Components/context/UserContext"
import ValidateContext from "./Components/context/ValidateContext";
import React, { useState } from 'react'
import Control from "./Components/Page/Control-System"
import MyReservations from "./Components/Page/MyReservation"
import UserRoute from "./Components/PrivateRoute/UserRoute"
import EmployeeRoute from "./Components/PrivateRoute/EmployeeRoute";

function App() {
    const [user, setUser] = useState(null);
    const [validate, setValidate]= useState(false)

    return (
        <BrowserRouter>
            <ValidateContext.Provider value={{ validate, setValidate }}>
                <UserContext.Provider value={{ user, setUser }}>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/Login' element={<Login />} />
                        <Route path='/Home' element={<Home />} />
                        <Route path='/Airplane' element={<Airplane />} />
                        <Route path='/Cruice' element={<CruiceShip />} />
                        <Route path='/Bus' element={<Bus />} />
                        <Route path='/Register' element={<Register />} />
                        <Route path='/Reservation' element={<Reservation />} />
                        <Route element={<UserRoute />}>
                            <Route path='/My_Reservations' element={<MyReservations />} />
                            <Route element={<EmployeeRoute />}>
                                <Route path='/Control_system' element={<Control />} />
                                <Route path='/Control_system/Ticket' element={<Controler_ticket />} />
                                <Route path='/Control_system/Destination' element={<Controler_destiny />} />
                                <Route path='/Control_system/Employee' element={<Controler_Employee />} />
                            </Route>
                        </Route>
                    </Routes>
                </UserContext.Provider>
            </ValidateContext.Provider>
        </BrowserRouter>
    )
    //Reservation/:id/:type
}
export default App;
