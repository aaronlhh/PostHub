import React from "react";
import { Link } from 'react-router-dom'


const PostCard = ({  }) => {
    return (
        <div className="post-card">
            <div className="time">
                Posted at blabla time
            </div>
            <div className="gap"></div>
            <Link 
                to='/'
                className="title-name" 
            >
                title
            </Link>
            <div className="gap"></div>
            <div className="upvotes">
                blabla upvotes
            </div>
        </div>
    )
}

export default PostCard;