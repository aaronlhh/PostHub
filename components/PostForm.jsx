import React from "react";

const PostForm = ({ data, handleChange }) => {
    
    return (
        <form className="form-inputs">
            <input 
                type="text"
                placeholder="Title"
                className="title-input"
                name="title"
                value={data.title? data.title: ''}
                onChange={handleChange}
                required
            />

            <textarea 
                name="content"  
                placeholder="Content (Optional)"
                className="content-input"
                value={data.content? data.content: ''}
                onChange={handleChange}
                rows="11">
            </textarea>

            <input 
                type="text"
                placeholder="Image URL (Optional)"
                name="image"
                className="image-input"
                value={data.image? data.image : ''}
                onChange={handleChange}
            />
        </form>
    )
}

export default PostForm;