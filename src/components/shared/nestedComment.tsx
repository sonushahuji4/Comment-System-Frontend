import { useState } from "react";
import like from "../../statics/images/like.svg";
import reply from "../../statics/images/reply.svg";
import CreateComment from "./createComment";

const NestedComments = ({comment,setCommentData,commentData,likesData,customer_id}: any) => {
    const [hideCommentCreator, setHideCommentCreator] = useState<boolean>(false);
    const [countLikes, setCountLikes] = useState(0);
    
    const onLikes = (params: object) => {
        const { customer_id,comment_id }: any = params;
        const lenLikesData = likesData?.length;
        if(likesData?.length){
            for(let i=0; i<lenLikesData; i++){
                if(customer_id === likesData[i].customer_id && comment_id === likesData[i].comment_id){
                    return
                }
            }
            likesData.push({customer_id,comment_id})
            sessionStorage.setItem("likesData",JSON.stringify(likesData));
            setCountLikes(countLikes + 1)
        }else{
            likesData.push({customer_id,comment_id})
            sessionStorage.setItem("likesData",JSON.stringify(likesData));
            setCountLikes(countLikes + 1)
        }
    }

    const nestedComments = (comment.children || []).map((comment: any) => {
        return (
                <NestedComments 
                    key={comment.comment_id} 
                    comment={comment} 
                    setCommentData={setCommentData} 
                    commentData={commentData} 
                    likesData={likesData}
                    customer_id = {customer_id}
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
                            <button
                                onClick={() => onLikes({customer_id : customer_id,comment_id: comment.comment_id})}
                            >{countLikes}</button>
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