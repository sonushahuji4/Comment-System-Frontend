interface Props {
    btnText : string;
    text : any;
    comment_id: any;
    setText : (e: any) => void;
    onClick : (comment_id : any) =>  void;
}

const Reply = ({btnText,text, comment_id, setText, onClick}: Props) => {

    return (
        <div className="reply-container">
            <div className="text-holder">
                <textarea
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
            </div>
            <div className="reply-button">
                <button onClick={(e)=> onClick(comment_id)}>{btnText}</button>
            </div>
        </div>
    )
}

export default Reply;