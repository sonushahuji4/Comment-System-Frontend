import { useState } from "react";
import comments from "../../database/comments.json";
import like from "../../statics/images/like.svg";
import reply from "../../statics/images/reply.svg";


const Comments = () => {
    const [content, setContent] = useState<any[]>(comments||[]);

    const displayComments = () => {
        return content.map((item) => {
            return (
                <div className="comment-container">
                    <div className="customer-img" key={item.commentId + '' + item.name}>
                        <img src="https://sb.kaleidousercontent.com/67418/960x550/5d1ca08941/marketing-removebg-1.png" alt="img"></img>
                    </div>
                    <div className="comment-card" key={item.name + '' + item.commentId}>

                        <div className="comment-box">
                            <div className="name-title">
                                <span>{"Sonu Shahuji"}</span>
                            </div>
                            <div className="comment-content">
                                <p>{item.content}</p>
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
            )
        });
    }

    return (
        <>
        {displayComments()}
        </>
    );
}

export default Comments;