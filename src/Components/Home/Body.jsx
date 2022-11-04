import Carousel from "./Carousel"
import SpecialOferts from "./SpecialOferts";
import CommentBox from "./CommentBox";

function Body() {
    return (
        <div className="Body">
            <div className="Carousel-container">
            <Carousel></Carousel>
            </div>
            <SpecialOferts></SpecialOferts>
            <CommentBox></CommentBox>
        </div>
    );
}

export default Body;