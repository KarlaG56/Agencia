import '../assets/Style/Header.css'
import { Link } from 'react-router-dom';
import { useRef, useState, useContext } from 'react'
import { UserContext } from "./context/context"

function Header() {

    const { user, setUser } = useContext(UserContext);
    return (
        <div className="Header">
            <Link to="/" id="logo">
                <div id="place-1">
                    <img src="/icon/Logo.svg" />
                </div>
                <a>Touring The Globe✨</a>
            </Link>

            <Link to="/" id="Reservation">
                <div id="place-2">
                    <img src="/icon/Reservation.svg" />
                </div>
                <a>Home</a>
            </Link>

            <Link to="/Airplane" id="Airplane">
                <div id="place-3">
                    <img src="/icon/Airplane.svg" />
                </div>
                <a>Airplane</a>
            </Link>

            <Link to="/Cruice" id="Cruise">
                <div id="place-3">
                    <img src="/icon/Cruise.svg" />
                </div>
                <a>Cruice</a>
            </Link>

            <Link to="/Bus" id="Bus">
                <div id="place-4">
                    <img src="/icon/Bus.svg" />
                </div>
                <a>Bus</a>
            </Link>

            {user == null ?
                <Link to="/Login" id="Login">
                    <div id="place-2">
                        <img src="/icon/Login.svg" />
                    </div>
                    <a>Login</a>
                </Link >

                :

                <Link to="/Control_system" id="Control">
                    <div id="place-2">
                    </div>
                    <a>Control System</a>
                </Link>

            }












        </div>


    );
}

export default Header;