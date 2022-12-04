function Body() {
    let p=0;
    const encabezado = [
        {
            id: 1,
            question: "que tan temprano necesito llegar al airopuerto?",
            answer: "recomendablemente 2 horas antes de lo que te marque el boleto"
        },
        {
            id: 2,
            question: "puedo incluir nilos en mi busqueda de vuelos?" ,
            answer: "Cuando realices búsquedas de vuelos en TTG puedes elegir el número de niños o bebés en el menú desplegable."
        },
        {
            id: 3,
            question: "con cuanta antelacion es recomendable reservar?" ,
            answer: "es recomendable viajarcon 4 a 6 meses de antelacion"
        },
        {
            id: 4,
            question: "a que destinos puedo viajar?" ,
            answer: "hay una lista al momento de crear una reservacion"
        },
        {
            id: 5,
            question: "puedo cancelar mi viaje?" ,
            answer: "si, en la seccion misviajes"
        },
        {
            id: 6,
            question: "los precios vienen con impuestos incluidos?" ,
            answer: " te mostramos los precios de los vuelos incluyendo las tasas e impuestos aplicables. Pero hay excepciones, como las tasas opcionales por viajar con equipaje documentado, elegir asiento en el caso de algunas aerolíneas, viajar con mascotas, etc. En esos casos, tendrás que solicitar a la aerolínea dichos servicios por separado."
        },
        {
            id: 7,
            question: "puedo reservar un viaje para otra persona?" ,
            answer: "No hay ningún problema si quieres pagar el vuelo de otra persona. No obstante, al proporcionar los detalles del pasajero debes asegurarte de que el nombre que escribas sea el mismo que aparece en el documento de identidad del viajero. Un simple fallo en una letra puede significar que la persona no pueda viajar.Además, ten en cuenta que muchas aerolíneas cobran un recargo adicional por modificar la información después de haber reservado el vuelo."
        },
        {
            id: 8,
            question: "como se que las opiniones de los hoteles son legitimas?" ,
            answer: "Todas las opiniones de hoteles de nuestra páginas provienen de huéspedes confirmados, así que puedes estar seguro de que la información es legítima."
        },
        {
            id: 9,
            question: "donde puedo encontrar el comprobante de mi reserva?" ,
            answer: "Si has reservado con uno de nuestros proveedores en la página de TTG, visita Reservas para más información. Sin embargo, si reservaste en otra página o se te redirigió a la página del proveedor desde la página de TTG para completar la compra, debes contactar directamente con el proveedor. ¿No recuerdas el nombre del proveedor? Comprueba el cargo realizado a tu tarjeta de crédito."
        },
        {
            id: 10,
            question: "cual es la politica de reembolsos de TTG" ,
            answer: "Dado que TTG es un motor de búsqueda y no un proveedor, no contamos con una política de reembolsos. De esto se encarga el proveedor con el que reserves. ¿No sabes a quién pedir más información? Comprueba el cargo realizado a tu tarjeta de crédito y/o visita Reservas para encontrar más información sobre el proveedor con el que has reservado."
        },
        {
            id: 11,
            question: "¿Cómo se usa TTG?" ,
            answer: "nosotros buscamos ofertas y tu puedes elegir la que mas te convenga"
        },
        {
            id: 5,
            question: "por que cuando click en una oferta el precio ha cambiado?" ,
            answer: "Al buscar en cientos de webs de viajes a la vez, a veces la información que nos transmiten los proveedores no es exacta. Puede ser que la web del proveedor no haya actualizado su inventario en la nuestra, que nos haya dado una ruta equivocada o que otro viajero haya reservado la última habitación disponible."
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