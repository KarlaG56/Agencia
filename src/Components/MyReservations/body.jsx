function Body() {
    return (
        <div className="table-container">
            <table className="table-reservation">
                <tr id="header-table">
                    <th>Place</th>
                    <th>Transport</th>
                    <th>Date</th>
                    <th>Cost</th>
                    <th></th>
                </tr>
                <tr id="line-one">
                    <th>España</th>
                    <th>Airplane</th>
                    <td>01/12/22</td>
                    <td>123$ US</td>
                    <td><button id="button-table">Cancel</button></td>
                </tr>   
                <tr id="line-two">
                    <th>China</th>
                    <th>Bus</th>
                    <td>02/12/22</td>
                    <td>627$ US</td>
                    <td><button id="button-table">Cancel</button></td>  
                </tr>
                <tr id="line-one">
                    <th>Ecuador</th>
                    <th>Cruise</th>
                    <td>03/12/22</td>
                    <td>912$ US</td>
                    <td><button id="button-table">Cancel</button></td>
                </tr>
                <tr id="line-two">
                    <th>Alemania</th>
                    <th>Airplane</th>
                    <td>04/12/22</td>
                    <td>126$ US</td>
                    <td><button id="button-table">Cancel</button></td>
                </tr>
                <tr id="line-one">
                    <th>Peru</th>
                    <th>Bus</th>
                    <td>05/12/22</td>
                    <td>328$ US</td>
                    <td><button id="button-table">Cancel</button></td>
                </tr>
                <tr id="line-two">
                    <th>Colombia</th>
                    <th>Cruise</th>
                    <td>06/12/22</td>
                    <td>732$ US</td>
                    <td><button id="button-table">Cancel</button></td>
                </tr>
                <tr id="line-one">
                    <th>Aguas Calientes</th>
                    <th>Airplane</th>
                    <td>07/12/22</td>
                    <td>1298$ US</td>
                    <td><button id="button-table">Cancel</button></td>
                </tr>
            </table>
        </div>
    );
}

export default Body;