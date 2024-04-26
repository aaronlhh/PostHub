import React, { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import { supabase } from "../src/client";

const HomePage = () => {
    const [listOrder, setListOrder] = useState(0);
    const [postList, setPostList] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const dataByTime = await supabase
                .from('HobbyPost')
                .select()
                .order('created_at', {ascending: false});

            const dataByUpvote = await supabase
                .from('HobbyPost')
                .select()
                .order('upvote', {ascending: false});
            // console.log(dataByUpvote);
            setPostList([dataByTime.data, dataByUpvote.data]);
            // console.log(new Date(data['0'].created_at))
        };
        fetchData().catch(console.error);
    }, [])

    return (
        <div className="homepage">
            <div className="filters">
                <span>Order by: </span>
                <div>
                    <input 
                        type="radio"
                        id="newest"
                        name='order'
                        value={0}
                        className="listOrder-button"
                        onChange={(e) => {
                            setListOrder(e.target.value)
                        }}
                        checked={listOrder == 0}
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
                        value={1}
                        className="listOrder-button"
                        onChange={(e) => {
                            setListOrder(e.target.value)
                        }}
                        checked={listOrder == 1}
                    />
                    <label htmlFor="popular">
                        Most Popular
                    </label>
                </div>
            </div>
            <div className="feeds">
                {
                    postList && 
                    Object.values(postList[listOrder]).map((value, index) => (
                        <PostCard  
                            postData = {value}
                            key = {index}
                        />
                    ))
                }
            </div>
        </div>
    )

}


export default HomePage;