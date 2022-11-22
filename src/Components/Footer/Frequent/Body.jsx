function Body() {
    const encabezado = [
        {
            id: 1,
            question: "que tan temprano necesito llegar al airopuerto",
            answer: "recomendablemente 2 horas antes de lo que te marque el boleto"
        },
        {
            id: 2,
            question: "que documentos necesito?" ,
            answer: "varia pero siempre es necesario un pasaporte"
        },
        {
            id: 3,
            question: "con cuanta antelacion es recomendable reservar" ,
            answer: "con 4 a 6 meses de antelacion"
        },
        {
            id: 4,
            question: "a que destinos puedo viajar" ,
            answer: "hay una lista al momento de crear una reservacion"
        },

    ]
    return (
        <div className="body">
            {encabezado.map ((elemento) => {
                return(
                    
                    <div className="qya">
                        <h3>{elemento.question}</h3>
                        
                        <h4>{elemento.answer}</h4>
                        <br />
                    </div>
                )
            })}
        </div>
    );
}

export default Body;