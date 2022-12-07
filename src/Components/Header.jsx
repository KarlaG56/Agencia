import '../assets/Style/Header.css'
import { Link } from 'react-router-dom';
import { useRef, useState, useContext } from 'react'
import UserContext from "./context/UserContext"
import ValidateContext from "./context/ValidateContext"
import { useTheme } from "../hooks/Theme";

import React from 'react';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';

function Header() {

    const [theme, handleChange] = useTheme('dark');

    const [open, setOpen] = React.useState(false);

    const [password, setPassword] = useState('')

    const handleChangePassword = (event) => { setPassword(event.target.value) }

    const logout = () => {
        setUser(null)
        setValidate(false)
        window.localStorage.removeItem("token")
    }

    const handleDelete = () => {
        if (user.password == password) {
            let link = "http://localhost:8080/user/" + user.id;
            fetch(link,
                {
                    method: 'DELETE',
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": window.localStorage.getItem("token")
                    }
                })
            alert("User Delete")
            logout()
        }
        else {
            alert("Passwords do not match")
        }

    }

    const click = () =>{
        window.localStorage.removeItem("token")
    }
    
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const { user, setUser } = useContext(UserContext);
    const { validate, setValidate } = useContext(ValidateContext);
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
                                <Link to="/Payment" className='M-Seccion'><li>Payment type</li></Link>
                                <Link to="/" className='M-Seccion'><li><button id='btn-delete-account' onClick={handleClickOpen}>Delete account</button></li></Link>
                                <Link to="/Login" className='M-Seccion' onClick={logout}><li>Sing off</li></Link>
                            </ul>
                            <Dialog open={open} onClose={handleClose}>
                                <DialogTitle>This action cannot be undone. This will permanently delete your entire account. All private workspaces will be deleted, and you will be removed from all shared workspace.</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>Please type in your password to confirm.</DialogContentText>
                                </DialogContent>
                                <input type="password" placeholder="Enter your password" id='alert-password-input' value={password} onChange={handleChangePassword} /><br />
                                <DialogActions>
                                    <button onClick={handleDelete} id='button-alert-confirm'>Permanently delete account</button><br />
                                </DialogActions>
                                <DialogActions>
                                    <button onClick={handleClose} id='button-alert-cancel'>Cancel</button>
                                </DialogActions>
                            </Dialog>
                        </div>

                        :

                        <Link to="/Control_system/Ticket" id="Control_system">
                            
                            <a >Control System</a>
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