import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";
import Card from "./CardComment";
function Data() {
    return ( 
        <div className="ListComments">
            <h1 className="ListComments_Titulo">List comments</h1>
            {response.map((registro) => {
                return <Card comment={response.comment} time={response.date} author={response.user}/>;
            })}
        </div>
    );
}

export default Data;