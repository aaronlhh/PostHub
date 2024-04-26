import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

const PostDetail = ({  }) => {
    const params = useParams();
    const [upvote, setUpvote] = useState(0);
    const [comment, setComment] = useState('');

    const handleUpvote = () => {
        setUpvote(upvote+1)
    }

    const handleDelete = () => {

    }

    return (
        <div className="post-detail">
            <div className="detail">
                <div className="time">
                    Posted at blabla time
                </div>
                <div className="gap"></div>
                <span className="post-title">title</span>
                <div className="gap"></div>
                <div className="upvotes">
                    blabla upvotes
                </div>
            </div>
            <div className="edit-list">
                <div className="upvote">
                    <span onClick={handleUpvote} className="symbol">👍 </span> 
                    {upvote} upvotes
                </div>
                <div className="change-post">
                    <Link to={`/update/${params.post_id}`} >
                        ✎
                    </Link>
                    <div className="gap"></div>
                    <div className="delete" onClick={handleDelete}>
                        🗑️
                    </div>
                </div>
            </div>
            <div className="comment-box">
                <div className="comment-history">
                    <div className="history">
                        - comment 1
                    </div>
                    <div className="history">
                        - comment 2
                    </div>
                </div>
                <div className="comment">
                    <input 
                        type="text"
                        className="comment-input"
                        placeholder="Leave a comment..."
                        name="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <button>Make Comment</button>
                </div>
            </div>
            
        </div>
    )
};

export default PostDetail;