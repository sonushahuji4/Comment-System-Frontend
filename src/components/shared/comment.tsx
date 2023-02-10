import { useState } from "react";
import CreateComment from "./createComment";
import NestedComments from "./nestedComment";
import comments from "../../database/comments.json";
import { Helper } from "../../helper/helper";


const Comment = () => {
    const [commentData, setCommentData] = useState<any[]>(Helper.sortByDate(comments));
    return (
        <div className="feed-container">
            <div className="feed-card">
                <CreateComment 
                    commentData={commentData} 
                    setCommentData={setCommentData} 
                    parent_id={null}/>
                {
                    commentData.map((comment: any) => {
                    return (
                        <NestedComments 
                            key={comment.comment_Id} 
                            comment={comment} 
                            setCommentData = {setCommentData}
                            commentData = {commentData}
                        />
                    )
                    })
                }
            </div>
        </div>
    )
}

export default Comment;