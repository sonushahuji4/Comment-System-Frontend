import { useState } from "react";
import CreateComment from "./createComment";

const NestedComments = ({comment,setCommentData,commentData,likesData,customer_id}: any) => {
    const [hideCommentCreator, setHideCommentCreator] = useState<boolean>(false);
    const [countLikes, setCountLikes] = useState(0);
    const [isLikeActive, setIsLikeActive] = useState(false);
    
    const onLikes = (params: object) => {
        const { customer_id,comment_id }: any = params;
        setIsLikeActive(!isLikeActive);
        const lenLikesData = likesData?.length;
        if(likesData?.length){
            for(let i=0; i<lenLikesData; i++){
                if(customer_id === likesData[i].customer_id && comment_id === likesData[i].comment_id){
                    likesData.splice(i,1);
                    setCountLikes(countLikes - 1)
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
                            <button
                                onClick={() => onLikes({customer_id : customer_id,comment_id: comment.comment_id})}
                            ><i className={`fa-solid fa-heart ${isLikeActive ? 'heart-color' : ''}`}></i> {countLikes}</button>
                        </div>
                        <div className="reply">
                            <button
                                onClick={() => setHideCommentCreator(!hideCommentCreator)}
                            ><i className="fa-solid fa-comment-dots"></i></button>
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