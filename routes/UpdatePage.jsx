import React, { useState, useEffect } from "react";
import PostForm from "../components/PostForm";
import { useParams } from "react-router-dom";
import { supabase } from "../src/client";

const UpdatePage = () => { 
    const params = useParams();
    const [postData, setPostData] = useState({
        title: '',
        content: '',
        image: ''
    });

    useEffect(() => {
        const fetchData = async () => {
            const postDataList = await supabase
                .from('HobbyPost')
                .select()
                .eq('id', params.post_id)

            setPostData(postDataList.data[0])
            console.log(postDataList.data[0]);
        }
        fetchData().catch(console.err);
    }, []);

    const handleUpdate = async () => {
        // create the form 
        await supabase  
            .from('HobbyPost')
            .update(postData)
            .eq('id', params.post_id)
        
        alert('update successfully');
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