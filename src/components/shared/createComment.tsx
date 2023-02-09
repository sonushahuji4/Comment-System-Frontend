import { useState } from "react";
import { Helper } from "../../helper/helper";

const CreateComment = ({setComment,comment}: any) => {
    const [text, setText] = useState<string>('');
    const credential: any = JSON.parse(sessionStorage.getItem("customer") || '{}');
    const createText = () => {
        console.log("create content....");
        if(text != ''){
            const commentObj = {
                "comment_id": Helper.generateUUID(),
                "contents": text,
                "customer_id": credential?.customer_id,
                "parent_id": null,
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
            let newComments = [...comment];
            newComments.push(commentObj);
            setComment(Helper.sortComments(newComments));
            setText('');
            console.log(commentObj);
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