import '../assets/Style/Footer.css'


function Footer() {
    const sections = [
        {
            id: 1,
            title: "Business",
            first_description: "About us",
            second_descripcion: "Contact us",
            span: "title",
            id_span: "id"
        },
        {
            id: 2,
            title: "Help",
            first_description: "frequent questions",
            second_descripcion: "",
            span: "title",
            id_span: "id"
        },
        {
            id: 3,
            title: "Legal",
            first_description: "Privacy policies",
            second_descripcion: "Terms and Conditions",
            span: "title",
            id_span: "id"
        },
        {
            id: 4,
            title: "Social networks",
            first_description: "",
            second_descripcion: "",
            span: "title",
            id_span: "id"
        }
    ]

    const socialNetworks = [
        {
            id: 1,
            icon: "/icon/Facebook.svg",
        },
        {
            id: 2,
            icon: "/icon/WhatsApp.svg",
        },
        {
            id: 3,
            icon: "/icon/Instagram.svg",
        }
    ]

    return (
        <div className="Footer">
            {sections.map ((elemento, i) => {
                return(
                    <div key={i} className="div-section">
                        <strong><span id={elemento.span}>{elemento.title}</span></strong><br />
                        <span id={elemento.id_span}>{elemento.first_description}</span><br />
                        <span id={elemento.id_span}>{elemento.second_descripcion}</span>
                    </div>
                )
            })}
            {socialNetworks.map ((elemento, i) => {
                return(
                    <div key={i} className="Card-networks">
                        <img src={elemento.icon} alt="" />
                    </div>
                 )
            })}
            <span id='copyright'>© Copyright 2022. All rights reserved. Developed by Touring The Globe✨.</span>
        </div>
    );
}

export default Footer;