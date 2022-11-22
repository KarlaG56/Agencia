function CardComment({comment, author, time}) {
    return ( 
        <div className="CommentOfUser">

                <div className="CajaComentario">
                    <p id="Comment_UserCreator">{comment}</p>
                </div>
                <p id="Comment_CreatorName">{author}</p>
                    <p id="Comment_Post_Time">{time}</p>
                <div className="Delete-button-container-ListComment">
                    <button id="Delete-CommentOfUser">Delete</button>
                </div>
        </div>
     );
}

export default CardComment; 