import { useState } from "react";
import like from "../../statics/images/like.svg";
import reply from "../../statics/images/reply.svg";
import CreateComment from "./createComment";

const NestedComments = ({comment,setCommentData,commentData}: any) => {
    const [hideCommentCreator, setHideCommentCreator] = useState<boolean>(false);
    
    const nestedComments = (comment.children || []).map((comment: any) => {
        return (
                <NestedComments 
                    key={comment.comment_id} 
                    comment={comment} 
                    setCommentData={setCommentData} 
                    commentData={commentData} 
                    type="child"/>)
    })
    
      return (
        <div style={{"marginLeft": "20px","marginTop":"0px"}}>
            <div className="comment-container">
                <div className="customer-img" key={comment.customer_id + '' + comment?.customers?.email}>
                    <img src={comment?.customers?.picture} alt="img"></img>
                </div>
                <div className="comment-card" key={comment?.customers?.email + '' + comment.customer_id}>

                    <div className="comment-box">
                        <div className="name-title">
                            <span>{comment?.customers?.customer_name}</span>
                        </div>
                        <div className="comment-content">
                            <p>{comment.contents}</p>
                        </div>
                    </div>
                    <div className="like-reply-card">
                        <div className="likes">
                            <img src={like}></img>
                            <span>0</span>
                        </div>
                        <div className="reply">
                            <img src={reply}></img>
                            <button
                                onClick={() => setHideCommentCreator(!hideCommentCreator)}
                            >{"Reply"}</button>
                        </div>
                    </div>
                    {
                        hideCommentCreator 
                        ? 
                            <>
                            {console.log("comment.comment_id :",comment.comment_id)}
                            <CreateComment 
                                comment={comment} 
                                setCommentData={setCommentData} 
                                commentData={commentData} 
                                setHideCommentCreator = {setHideCommentCreator} 
                                parent_id={comment.comment_id}/>
                                </>

                        : 
                            null 
                    }
                    

                </div>
            </div>
        {nestedComments}
        </div>
      )
}

export default NestedComments;