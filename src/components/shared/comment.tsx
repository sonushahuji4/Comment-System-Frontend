import { useState } from "react";
import CreateComment from "./createComment";
import NestedComments from "./nestedComment";
import comments from "../../database/comments.json";
import { Helper } from "../../helper/helper";
import useCrudOperation from "../../hooks/useCrudOperation";


const Comment = () => {
    const [commentData, setCommentData] = useState<any[]>(Helper.sortByDate(comments));
    const { onCreateComment } = useCrudOperation()
    const [text, setText] = useState<string>('');
    const likesData: any = JSON.parse(sessionStorage.getItem("likesData") || '[]');
    const customer: any = JSON.parse(sessionStorage.getItem("customer") || '{}');
    return (
        <div className="feed-container">
            <div className="feed-card">
                <CreateComment 
                    commentData={commentData} 
                    onCreateComment = {onCreateComment}
                    setCommentData={setCommentData}
                    text={text}
                    setText={setText}/>
                {
                    commentData.map((comment: any) => {
                    return (
                        <NestedComments 
                            key={comment.comment_id} 
                            comment={comment} 
                            setCommentData = {setCommentData}
                            commentData = {commentData}
                            likesData = {likesData}
                            customer_id = {customer.customer_id}
                        />
                    )
                    })
                }
            </div>
        </div>
    )
}

export default Comment;