function CommentBox() {
    return (
        <>
             <div className="CommentBox-container">
            <div className="Title-comment">
                    <h2>🔥 Comments 🔥</h2>
            </div>
            <label id='warning'>Post comments with your account, so you can manage them in the future. If you post anonymous comments, you will not be able to edit or delete them.</label>
            <div className="CommentBox-Box">
                <div className="Image-container">
                    <img src="/icon/Person.svg" alt="" />
                </div>
                <strong><label id='Post'>Post as:</label></strong>
                <div className='Box'>
                    <select>
                        <option value="value1">User</option> 
                        <option value="value2">Anonymous</option>
                        <option value="value3" selected>...</option>
                    </select>
                </div>
            </div>
            <textarea cols="20" rows="5" placeholder='Let us know what you think (^^)'></textarea><br />
            <button id='Publish'>Publish</button>
        </div><br />
        </>
    );
}

export default CommentBox;