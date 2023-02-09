import { useState } from "react";
import CreateComment from "./createComment";
import NestedComments from "./nestedComment";
import comments from "../../database/comments.json";
import { Helper } from "../../helper/helper";


const Comment = () => {
    const [comment, setComment] = useState<any[]>(Helper.sortComments(comments));
    return (
        <div className="feed-container">
            <div className="feed-card">
                <CreateComment setComment={setComment} comment={comment}/>
                {
                    comment.map((comment: any) => {
                    return (
                        <NestedComments 
                            key={comment.comment_Id} 
                            comment={comment} 
                            setComment = {setComment}
                        />
                    )
                    })
                }
            </div>
        </div>
    )
}

export default Comment;