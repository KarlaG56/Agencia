function Data() {
    const data = [
        {
            id: 1,
            data: "User Name",
            type: "text",
            name: "User"
        },
        {
            id: 2,
            data: "Email",
            type: "text",
            name: "Email"
        },
        {
            id: 3,
            data: "Confirm email",
            type: "text",
            name: "email"
        },
        {
            id: 4,
            data: "Password",
            type: "password",
            name: "Password"
        },
        {
            id: 5,
            data: "Confirm password",
            type: "password",
            name: "password"
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
            {data.map((elemento, i) => {
                return (
                    <div key={i} className="form">
                        <label id={elemento.name}>{elemento.data}:</label><br />
                        <input className="place" type={elemento.type} />
                    </div>
                )
            })}
        </div>
    );
}
export default Data;