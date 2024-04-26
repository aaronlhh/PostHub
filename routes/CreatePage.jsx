import React, { useState } from "react";
import PostForm from "../components/PostForm";
import { supabase } from "../src/client";

const CreatePage = () => {
    const [postData, setPostData] = useState({
        title: '',
        content: '',
        image: ''
    });

    const handleCreate = async () => {
        // create the form 
        await supabase
            .from('HobbyPost')
            .insert(postData)
        
        alert("Inserting data successfully");
        setPostData({
            title: '',
            content: '',
            image: ''
        });
    }

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