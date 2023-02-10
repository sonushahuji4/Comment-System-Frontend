import { useState } from "react";
import CreateComment from "./createComment";
import NestedComments from "./nestedComment";
import comments from "../../database/comments.json";
import { Helper } from "../../helper/helper";


const Comment = () => {
    const [commentData, setCommentData] = useState<any[]>(Helper.sortByDate(comments));
    const likesData: any = JSON.parse(sessionStorage.getItem("likesData") || '[]');
    const credential: any = JSON.parse(sessionStorage.getItem("customer") || '{}');
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
                            likesData = {likesData}
                            customer_id = {credential.customer_id}
                        />
                    )
                    })
                }
            </div>
        </div>
    )
}

export default Comment;