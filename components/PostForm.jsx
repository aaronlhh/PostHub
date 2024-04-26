import React from "react";

const PostForm = ({ data, handleChange }) => {
    
    return (
        <form className="form-inputs">
            <input 
                type="text"
                placeholder="Title"
                className="title-input"
                name="title"
                value={data.title}
                onChange={handleChange}
                required
            />

            <input 
                type="text"
                placeholder="Content (Optional)"
                name="content"
                className="content-input"
                value={data.content}
                onChange={handleChange}
            />

            <input 
                type="text"
                placeholder="Image URL (Optional)"
                name="image"
                className="image-input"
                value={data.image}
                onChange={handleChange}
            />
        </form>
    )
}

export default PostForm;