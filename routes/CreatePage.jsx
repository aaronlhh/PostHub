import React, { useState } from "react";
import PostForm from "../components/PostForm";

const CreatePage = () => {
    const [postData, setPostData] = useState({
        title: '',
        content: '',
        image: ''
    });

    const handleCreate = () => {
        
    };

    return (
        <div className="create-form">
            <PostForm 
                data = {postData}
                handleChange = {(e) => {
                    setPostData((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                    }))
                }}
            />
            <button onClick={handleCreate}>Create Post</button>
        </div>
    )
}


export default CreatePage;