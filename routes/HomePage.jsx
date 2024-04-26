import React, { useEffect, useState } from "react";
import PostCard from "../components/PostCard";

const HomePage = () => {
    const [listOrder, setListOrder] = useState(1);

    return (
        <div className="homepage">
            <div className="filters">
                <span>Order by: </span>
                <div>
                    <input 
                        type="radio"
                        id="newest"
                        name='order'
                        value={1}
                        className="listOrder-button"
                        onChange={(e) => {
                            setListOrder(e.target.value)
                        }}
                        checked={listOrder == 1}
                    />
                    
                    <label htmlFor="newest">
                        Newest
                    </label>
                    
                </div>
                <div>
                    <input 
                        type="radio"
                        id="popular"
                        name='order'
                        value={2}
                        className="listOrder-button"
                        onChange={(e) => {
                            setListOrder(e.target.value)
                        }}
                        checked={listOrder == 2}
                    />
                    <label htmlFor="popular">
                        Most Popular
                    </label>
                </div>
            </div>
            <div className="feeds">
                <PostCard  />
                <PostCard  />
                <PostCard  />
                <PostCard  />
                <PostCard  />
                <PostCard  />
                <PostCard  />
            </div>
        </div>
    )

}


export default HomePage;