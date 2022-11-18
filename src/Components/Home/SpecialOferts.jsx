function SpecialOferts() {
    const Oferts = [
        {
            id: 1,  
            points: "⭐ 5",
            img: "/img/Cruise.jpg",
            condition: "Cruise",
            title: "Cruises from $253 US"
        },
        {
            id: 2,
            points: "⭐ 5",
            img: "/img/Mexico.jpg",
            condition: "2x1",
            title: "2x1 on all transportation within Mexico"
        },
        {
            id: 3,
            points: "⭐ 5",
            img: "/img/Airplane.jpg",
            condition: "Airplane",
            title: "Flights from $55 US"
        },
        {
            id: 4,
            points: "⭐ 5",
            img: "/img/Oferts.jpg",
            condition: "Discounts",
            title: "Discounts on trips abroad"
        },
        {   id: 5,
            points: "⭐ 5",
            img: "/img/Bus.png",
            condition: "Bus",
            title: "buses from $10 US"
        },
      ];

    return (
        <div className='Container'>
            <div className="novedad">
                <div className="texto">
                    <h2>🔥 Special Offers 🔥</h2>
                </div>
            </div>
            {Oferts.map ((elemento, i) => {
                return(
                    <div key={i} className="col">
                        <div className="port">
                        <div className="image">
                            <div className="calificacion">
                                <h5>{elemento.points}</h5>
                            </div>
                            <div className="state">
                                <h5>{elemento.condition}</h5>
                            </div>
                            <img src={elemento.img} alt="" />
                        </div>
                        <div className="title">
                            <strong>{elemento.title}</strong>
                        </div>
                    </div>
                    </div>   
                )
                })}
        </div>
    );
}
export default SpecialOferts;