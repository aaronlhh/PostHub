import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'


const PostCard = ({ postData }) => {
    const [timeString, setTimeString] = useState('');
    useEffect(() => {
        const prevDate = new Date(postData.created_at);
        const currentDate = new Date();
        let diff = (currentDate.getTime() - prevDate.getTime()) / 1000;
        if (diff < 3600) {
            setTimeString(`${Math.floor(diff/60)} minutes ago`);
        } else if (diff < 86400) {
            setTimeString(`${Math.floor(diff/3600)} hours ago`);
        } else if (diff < 2620800) {
            setTimeString(`${Math.floor(diff/86400)} days ago`);
        } else if (diff < 31449600) {
            setTimeString(`${Math.floor(diff/2620800)} months ago`);
        } else {
            setTimeString(`${Math.floor(diff/31449600)} years ago`);
        }
    }, []);

    return (
        <div className="post-card">
            <div className="time">
                Posted {timeString}
            </div>
            <div className="gap"></div>
            <Link 
                to={`/detail/${postData.id}`}
                className="title-name" 
            >
                {postData.title}
            </Link>
            <div className="gap"></div>
            <div className="upvotes">
                {postData.upvote} upvotes
            </div>
        </div>
    )
}

export default PostCard;