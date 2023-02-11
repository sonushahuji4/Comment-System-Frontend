import { Helper } from "../helper/helper";

const useCrudOperation = () => {
    const customer: any = JSON.parse(sessionStorage.getItem("customer") || '{}');

    const onCreateComment = (commentData: any[],setCommentData: React.Dispatch<React.SetStateAction<any[]>>, text: any, setText:React.Dispatch<React.SetStateAction<any>>) => {
        if(text != ''){
            const commentObj = {
                "comment_id": Helper.generateUUID(),
                "contents": text,
                "customer_id": customer?.customer_id,
                "parent_id": null,
                "upvotescount": 0,
                "createdAt": new Date().toISOString(),
                "updatedAt": new Date().toISOString(),
                "customers" : {
                    "customer_id" : customer?.customer_id,
                    "customer_name" : customer?.customer_name,
                    "email" : customer?.email,
                    "picture" : customer?.picture,
                    "createdAt" : customer?.createdAt,
                    "updatedAt": customer?.updatedAt
                },
                "children" : []
            }

            let newCommentsData = [...commentData];
            newCommentsData.push(commentObj);
            setText('');
            setCommentData(Helper.sortByDate(newCommentsData));
        }
    }

    const onReply = (commentData: any[], setCommentData : React.Dispatch<React.SetStateAction<any[]>>, parent_id: string | number,replyText: any,setReplyText: React.Dispatch<any>, setHideReply: React.Dispatch<React.SetStateAction<boolean>>) => {
        const commentObj = {
            "comment_id": Helper.generateUUID(),
            "contents": replyText,
            "customer_id": customer?.customer_id,
            "parent_id": parent_id,
            "upvotescount": 0,
            "createdAt": new Date().toISOString(),
            "updatedAt": new Date().toISOString(),
            "customers" : {
                "customer_id" : customer?.customer_id,
                "customer_name" : customer?.customer_name,
                "email" : customer?.email,
                "picture" : customer?.picture,
                "createdAt" : customer?.createdAt,
                "updatedAt": customer?.updatedAt
            },
            "children" : []
        }

        const reply = (comments: any, comment_id: any) => {
            for (const [index, eachComment] of comments.entries()) {
                if (eachComment.comment_id === comment_id) {
                    if(eachComment?.children?.length){
                        eachComment.children.unshift(commentObj);
                    }else{
                        eachComment.children.push(commentObj)
                    }   
                    continue;
                }
                if (eachComment.children) {
                    reply(eachComment.children, comment_id);
                }
            }
            return comments;
        }

        let newCommentsData = [...commentData];
        newCommentsData = reply(newCommentsData,parent_id);
        setReplyText('');
        setHideReply(false);
        setCommentData(Helper.sortByDate(newCommentsData));
        return
    }

    const onUpdateReply = (commentData: any[],comment_id: string | number, setCommentData: React.Dispatch<React.SetStateAction<any[]>>, seIsEditActive:  React.Dispatch<React.SetStateAction<boolean>>,text : any) => {
        if(text){
            const updateReply = (comments: any, comment_id: any) => {
                for (const [index, eachComment] of comments.entries()) {
                    if (eachComment.comment_id === comment_id) {
                        eachComment.contents = text;
                        eachComment.updatedAt = new Date().toISOString()
                        continue;
                    }
                    if (eachComment.children) {
                        updateReply(eachComment.children, comment_id);
                    }
                }
                return comments;
            }
    
            let newCommentsData = [...commentData];
            const updateComments = updateReply(newCommentsData,comment_id);
            setCommentData(Helper.sortByDate(updateComments));
            seIsEditActive(false);
        }
    }

    const onDeleteReply = (commentData: any[], comment_id: string | number, setCommentData: React.Dispatch<React.SetStateAction<any[]>>) => {
        const deleteComment = (comments: any, comment_id: any) => {
            for (const [index, eachComment] of comments.entries()) {
                if (eachComment.comment_id === comment_id) {
                    comments.splice(index, 1);
                    continue;
                }
                if (eachComment.children) {
                    deleteComment(eachComment.children, comment_id);
                }
            }
            return comments;
        }

        let newCommentsData = [...commentData];
        const updateComments = deleteComment(newCommentsData,comment_id)
        setCommentData(Helper.sortByDate(updateComments));
    }

    const onLikeReply = () => {

    }

    return {onUpdateReply,onDeleteReply,onReply,onCreateComment};
}

export default useCrudOperation;