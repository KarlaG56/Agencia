
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
import Payment from "./Components/Page/Payment"
import UserRoute from "./Components/PrivateRoute/UserRoute"
import EmployeeRoute from "./Components/PrivateRoute/EmployeeRoute";
import Controler_ListComments from "./Components/Page/Controler-ListComments"
import NotFound from "./Components/NotFound"
import NotAuthorized from "./Components/NotAuthorize";
import About from "./Components/Page/Footer_About"
import Frequent from "./Components/Page/Footer_Frequent"
import Policies from "./Components/Page/Footer_Policies"
import Terms from "./Components/Page/Footer_Terms"

function App() {
    const [user, setUser] = useState(null);
    const [validate, setValidate] = useState(null)

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
                        <Route element={<UserRoute />}>
                            <Route path='/Reservation/:destiny/:id/:type' element={<Reservation />} />
                            <Route path='/My_Reservations' element={<MyReservations />} />
                            <Route path="/Payment" element={<Payment />} />
                            <Route element={<EmployeeRoute />}>
                                <Route path='/Control_system' element={<Control />} />
                                <Route path='/Control_system/Ticket' element={<Controler_ticket />} />
                                <Route path='/Control_system/Destination' element={<Controler_destiny />} />
                                <Route path='/Control_system/Employee' element={<Controler_Employee />} />
                                <Route path="/Control_system/ListComments" element={<Controler_ListComments />} />
                            </Route>
                        </Route>
                        <Route path="/notFound" element={<NotFound />} />
                        <Route path="/NotAuthorized" element={<NotAuthorized />} />
                        <Route path='/About' element={<About />} />
                        <Route path='/Frequent' element={<Frequent />} />
                        <Route path='/Policies' element={<Policies />} />
                        <Route path='/Terms' element={<Terms />} />
                    </Routes>
                </UserContext.Provider>
            </ValidateContext.Provider>
        </BrowserRouter>
    )
    //Reservation/:id/:type
}
export default App;
