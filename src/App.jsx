
import Login from "./Components/Page/Login";
import Register from "./Components/Page/Register";
import Home from "./Components/Page/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CruiceShip from "./Components/Page/CruiceShip";
import Airplane from "./Components/Page/Flight";
import Bus from "./Components/Page/Bus";
import Reservation from "./Components/Page/Reservation";
import Controler_ticket from "./Components/Page/Controler-ticket"
import Controler_destiny from "./Components/Page/Controler-destiny"
import Controler_Employee from "./Components/Page/Controler-Employee"



function App() {
 

    return (

        <BrowserRouter>
        
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/Login' element={<Login/>}/>
                    <Route path='/Home' element={<Home/>}/>
                    <Route path='/Airplane' element={<Airplane/>}/>
                    <Route path='/Cruice' element={<CruiceShip/>}/>
                    <Route path='/Bus' element={<Bus/>}/>
                    <Route path='/Register' element={<Register/>}/>
                    <Route path='/Reservation' element={<Reservation/>}/>
                    <Route path='/Control_system/Ticket' element={<Controler_ticket/>}/>
                    <Route path='/Control_system/Destination' element={<Controler_destiny/>}/>
                    <Route path='/Control_system/Employee' element={<Controler_Employee/>}/>
                </Routes>
                
        </BrowserRouter>
    )
}

export default App;
