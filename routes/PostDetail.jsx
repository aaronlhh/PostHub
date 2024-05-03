import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../src/client";

const PostDetail = ({  }) => {
    const params = useParams();
    const [comment, setComment] = useState('');
    const [postData, setPostData] = useState(null);
    const [commentData, setCommentData] = useState(null);
    const [timeString, setTimeString] = useState('');
    const [commentHistory, setCommentHistory] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const postDataList = await supabase 
                .from('HobbyPost')
                .select()
                .eq('id', params.post_id)
            
            const commentDataList = await supabase  
                .from('HobbyComment')
                .select()
                .eq('post_id', params.post_id)
                .order('created_at', {ascending: true})

            // console.log([postDataList.data[0], commentDataList.data])
            setPostData(postDataList.data[0]);
            setCommentData(commentDataList.data)
            setCommentHistory(
                Object.values(commentDataList.data).map((value) => (
                    value.content
                ))
            )

            const prevDate = new Date(postDataList.data[0].created_at);
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
        };
        fetchData().catch(console.error);
    }, []);


    const handleUpvote = async () => {
        const newInput = {
            ...postData,
            upvote: postData.upvote+1
        };
        setPostData(newInput);

        const {error1} = await supabase
            .from('HobbyPost')
            .update(postData)
            .eq('id', postData.id)
    }

    const handleMakeComment = async (e) => {
        e.preventDefault();

        const newInput = {
            content: comment,
            post_id: params.post_id
        };

        const {error2} = await supabase
            .from('HobbyComment')
            .insert(newInput)

        setCommentHistory((prevHist) => ([
            ...prevHist,
            comment
        ]));
        setComment('');
    }

    const handleDelete = async () => {
        // delete post
        await supabase
            .from('HobbyPost')
            .delete()
            .eq('id', params.post_id)

        // delete all comments related to this
        await supabase
            .from('HobbyComment')
            .delete()
            .eq('post_id', params.post_id)
        
        alert('Delete Successfully');
        window.location = '/';
    }

    return (
        <>
            {
                postData && commentData ? (
                <div className="post-detail">
                    <div className="detail">
                        <div className="time">
                            Posted {timeString}
                        </div>
                        <div className="gap"></div>
                        <span className="post-title">{postData.title}</span>
                        {
                            postData.content == '' ? (
                                <></>
                            ) : (
                                <>
                                    <div className="gap"></div>
                                    <div className="content">
                                        {postData.content}
                                    </div>
                                </>                                
                            )
                        }
                        <div className="gap"></div>
                        {
                            postData.image == '' ? (
                                <></>
                            ) : (
                                <div className="post-img">
                                    <img 
                                        src={postData.image} 
                                        alt="Image posted by user"
                                    />
                                </div> 
                            )
                        }
                    </div>
                    <div className="edit-list">
                        <div className="upvote">
                            <span onClick={handleUpvote} className="symbol">👍 </span> 
                            {postData.upvote} upvotes
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
                            {
                                Object.values(commentHistory).map((value, index) => (
                                    <div className="history" key={index}>
                                        - {value}
                                    </div>
                                ))
                            }
                        </div>
                        <form className="comment" 
                            autocomplete="off"
                            onSubmit={handleMakeComment}>
                            <input 
                                type="text"
                                className="comment-input"
                                placeholder="Leave a comment..."
                                name="comment"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                required
                            />
                            <button type="submit">Make Comment</button>
                        </form>
                    </div>
                </div>) :
                <div className="post-detail"></div> 
            }
        </>
    )
};

export default PostDetail;