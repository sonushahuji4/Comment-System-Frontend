import { useState } from "react";
import { Helper } from "../../helper/helper";

const CreateComment = ({comment,commentData,setCommentData,parent_id,setHideCommentCreator}: any) => {
    const [text, setText] = useState<string>('');
    const credential: any = JSON.parse(sessionStorage.getItem("customer") || '{}');
    const createText = () => {
        if(text != ''){
            const commentObj = {
                "comment_id": Helper.generateUUID(),
                "contents": text,
                "customer_id": credential?.customer_id,
                "parent_id": parent_id,
                "upvotescount": 0,
                "createdat": new Date().toISOString(),
                "updatedat": new Date().toISOString(),
                "customers" : {
                    "customer_id" : credential?.customer_id,
                    "customer_name" : credential?.customer_name,
                    "email" : credential?.email,
                    "picture" : credential?.picture,
                    "createdAt" : credential?.createdAt,
                    "updatedAt": credential?.updatedAt
                },
                "children" : []
            }

            let newCommentsData = [...commentData];
            if(parent_id){
                const rec = (commentsData: any, i: any) => {
                    if(commentsData[i].comment_id == parent_id){
                        if(commentsData[i]?.children?.length){
                            commentData[i].children.unshift(commentObj);
                        }else{
                            commentsData[i].children = []
                            commentsData[i].children.push(commentObj)
                        }
                        return
                    }
                    else{
                        if(commentsData[i]?.children.length){
                            for(let j = 0; j < commentsData[i]?.children?.length; j++){
                                rec(commentsData[i].children, j);
                                return
                            }
                        }
                    }
                    return 
                } 

                for(let i=0; i < newCommentsData.length; i++){
                    rec(newCommentsData,i);
                }
                setCommentData(Helper.sortByDate(newCommentsData));
                setHideCommentCreator(false)
                setText('');
            }else{
                newCommentsData.push(commentObj);
                setCommentData(Helper.sortByDate(newCommentsData));
                setText('');
            }
        }
    }
    return (
        <div className="create-comment">
            <div className="content">
                <textarea
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
            </div>
            <div className="create-btn">
                <button onClick={createText}>{"Create"}</button>
            </div>
        </div>
    )
}

export default CreateComment;