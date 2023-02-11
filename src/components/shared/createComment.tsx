const CreateComment = ({commentData,onCreateComment,setCommentData,text,setText}: any) => {
    return (
        <div className="create-comment">
            <div className="content">
                <textarea
                    placeholder="Start a new comment"
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
            </div>
            <div className="create-btn">
                <button onClick={() => onCreateComment(commentData,setCommentData,text,setText)}>{"Create"}</button>
            </div>
        </div>
    )
}

export default CreateComment;