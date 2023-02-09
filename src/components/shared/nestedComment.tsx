import like from "../../statics/images/like.svg";
import reply from "../../statics/images/reply.svg";

const NestedComments = ({comment,setComment}: any) => {
    
    const nestedComments = (comment.children || []).map((comment: any) => {
        return <NestedComments key={comment.comment_Id} comment={comment} type="child" />
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
                            <span>{"Reply"}</span>
                        </div>
                    </div>

                </div>
            </div>
        {nestedComments}
        </div>
      )
}

export default NestedComments;