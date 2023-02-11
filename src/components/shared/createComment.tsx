import { useState } from "react";
import { Helper } from "../../helper/helper";
import useCrudOperation from "../../hooks/useCrudOperation";

const CreateComment = ({commentData,onCreateComment,setCommentData,text,setText}: any) => {
    return (
        <div className="create-comment">
            <div className="content">
                <textarea
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