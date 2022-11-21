import '../assets/Style/Header.css'
import { Link } from 'react-router-dom';
import { useRef, useState, useContext } from 'react'
import UserContext from "./context/UserContext"
import ValidateContext from "./context/ValidateContext"
import { useTheme } from "../hooks/Theme";

function Header() {

    const [theme, handleChange] = useTheme('dark');

    const {user} = useContext(UserContext);
    const {validate} = useContext(ValidateContext);

    return (
        <div className="Header">
            <Link to="/" id="logo">
                <div id="place-1">
                    <img src="/icon/Logo.svg" />
                </div>
                <a className='TitleTTG'>Touring The Globe✨</a>
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

            {validate ?
                <div>
                    {user.role == "client" ?
                        <div className='menu-container'>
                            <input className='input-hamburger' type="checkbox" id="menu-hamburger" />
                            <label for="menu-hamburger"> ☰ </label>
                            <ul>
                                <Link to="/My_Reservations" className='M-Seccion'><li>My reservations</li></Link>
                                <Link to="/" className='M-Seccion'><li>Payment type</li></Link>
                                <Link to="/" className='M-Seccion'><li>Delete account</li></Link>
                                <Link to="/Login" className='M-Seccion' ><li>Sing off</li></Link>
                            </ul>
                        </div>

                        :

                        <Link to="/Control_system" id="Control_system">
                            <div id="place-2">
                                <img src="/icon/Login.svg" />
                            </div>
                            <a>Control System</a>
                        </Link>

                    }
                </div>

                :

                <Link to="/Login" id="Login">
                    <div id="place-2">
                        <img src="/icon/Login.svg" />
                    </div>
                    <a>Login</a>
                </Link >

            }
        </div>


    );
}

export default Header;