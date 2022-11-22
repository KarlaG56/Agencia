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
            </table>
        </div>
    );
}
export default Body;