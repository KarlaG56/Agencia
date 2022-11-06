import  '../assets/Style/Header.css'

function Header() {
    const encabezado = [
        {
            id: 1,
            image: "/icon/Logo.svg",
            title: "Touring The Globe✨",
            etiqueta: "logo",
            place: "place-1"
        },
        {
            id: 2,
            image: "/icon/Reservation.svg",
            title: "Reservation",
            etiqueta: "Reservation",
            place: "place-2"
        },
        {
            id: 3,
            image: "/icon/Airplane.svg",
            title: "Airplane",
            etiqueta: "Airplane",
            place: "place-3"
        },
        {
            id: 4,
            image: "/icon/Cruise.svg",
            title: "Cruise",
            etiqueta: "Cruise",
            place: "place-3"
        },
        {
            id: 5,
            image: "/icon/Bus.svg",
            title: "Bus",
            etiqueta: "Bus",
            place: "place-4"
        },
        {
            id: 6,
            image: "/icon/Login.svg",
            title: "Login",
            etiqueta: "Login",
            place: "place-2"
        }
    ]
    return (
        <div className="Header">
            {encabezado.map ((elemento, i) => {
                return(
                    <div key={i} id={elemento.etiqueta}>
                        <div id={elemento.place}>
                        <img src={elemento.image} alt="" />
                        </div>
                        <span>{elemento.title}</span>
                    </div>
                )
            })}
        </div>
    );
}

export default Header;