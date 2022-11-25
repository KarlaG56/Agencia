function Body() {
    let p=0;
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
            answer: "es recomendable viajarcon 4 a 6 meses de antelacion"
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
                p=p+1;
                let idDQ="question" + p;
                let idDA="answer" + p;
                return(
                    
                    <div className="qya" key={elemento.id}>
                        <h3 id={idDQ} onClick={()=>{document.getElementById(idDA).style.display="block"}}>{elemento.question}</h3>
                        <br/> <br/>
                        <p id={idDA} className="answer" onClick={()=>{document.getElementById(idDA).style.display="none"}}>{elemento.answer}</p>
                        <br/> <br/>
                    </div>
                )
            })}
        </div>
    );
}

export default Body;