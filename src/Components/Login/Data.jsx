function Data() {

    return (
        <div className="Login-container">
            <div className="title-container">
                <div className="Logo-container">
                    <img src="/icon/Logo.svg" alt="" />
                </div>
                <h1>Touring The Globe✨</h1>
            </div>
            <h3>Account login</h3>

            <form>
                <div>
                    <label id="Email">Email</label><br />
                    <input className="place" type="text" />
                </div>
                <br />

                <div >
                    <label id="Password">Password</label><br />
                    <input className="place" type="password" />
                </div>
            </form>

        </div>
    );
}

export default Data;