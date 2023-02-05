import { useState } from "react";

const CreateComment = () => {
    const [content, setContent] = useState<string>('');
    const createContent = () => {
        console.log("create content....")
    }
    return (
        <div className="create-comment">
            <div className="content">
                <textarea
                    value={content}
                    onChange={e => setContent(e.target.value)}
                />
            </div>
            <div className="create-btn">
                <button onClick={createContent}>{"Create"}</button>
            </div>
        </div>
    )
}

export default CreateComment;