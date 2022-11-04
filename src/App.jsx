
import Login from "./Components/Page/Login";
import Register from "./Components/Page/Register";
import Home from "./Components/Page/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Flight from "./Components/Page/CruiceShip";


function App() {
    return (

        <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login/>}/>
                    <Route path='/Home' element={<Home/>}/>
                    <Route path='/Register' element={<Register/>}/>
                </Routes>
        </BrowserRouter>
    )
}

export default App;
