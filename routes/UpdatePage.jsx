import React, { useState } from "react";
import PostForm from "../components/PostForm";

const UpdatePage = () => { 
    const [postData, setPostData] = useState({
        title: '',
        content: '',
        image: ''
    });

    const handleUpdate = () => {
        // create the form 
        
    }

    return (
        <div className="update-form">
            <PostForm 
                data = {postData}
                handleChange = {(e) => {
                    setPostData((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                    }))
                }}
            />
            <button onClick={handleUpdate}>Update Post</button>
        </div>
    )
}


export default UpdatePage;