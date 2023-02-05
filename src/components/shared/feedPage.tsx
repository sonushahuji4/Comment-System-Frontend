import CreateComment from "./createComment";
import Comments from "./comments";

const Feed = () => {
    return (
        <div className="feed-container">
            <div className="feed-card">
                <CreateComment />
                <Comments />
            </div>
        </div>
    )
}

export default Feed;