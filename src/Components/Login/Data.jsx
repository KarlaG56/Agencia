function Data() {
    const data = [
        {
            id: 1,
            data: "Email",
            type: "text",
        },
        {
            id: 2,
            data: "Password",
            type: "password",
        }
    ]

    return (
        <div className="Login-container">
            <div className="title-container">
                <div className="Logo-container">
                    <img src="/icon/Logo.svg" alt="" />
                </div>
                <h1>Touring The Globe✨</h1>
            </div>
            <h3>Account login</h3>
            {data.map ((elemento, i) => {
                return(
                    <div key={i} className="form">
                        <label id={elemento.data}>{elemento.data}:</label><br />
                        <input className="place" type={elemento.type} />
                    </div>  
                )
            })}
        </div>
    );
}

export default Data;