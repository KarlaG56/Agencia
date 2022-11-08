import Destiny from "./Body_destiny"
import TypeOfTrip from "./DestinyId";

function Background() {
    return (
        <>
            <div className="Destinity_Background">
                <img src='/img/Rio.jpg'/>
            </div>
            <Destiny />
            <TypeOfTrip />
        </>
    );
}

export default Background;