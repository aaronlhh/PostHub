import React, { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import { supabase } from "../src/client";
import { useLocation } from "react-router-dom";

const HomePage = () => {
    const [listOrder, setListOrder] = useState(0);
    const [filteredPostList, setFilterPostList] = useState(null);
    const location = useLocation();
    const search = location.state? location.state.search:"";

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
            let newTimeData = Object.values(dataByTime.data).filter((value) => (
                value.title.toLowerCase().includes(search)
            ))
            let newTimeUpvote = Object.values(dataByUpvote.data).filter((value) => (
                value.title.toLowerCase().includes(search)
            ))
            setFilterPostList([newTimeData, newTimeUpvote]);
            // console.log(new Date(data['0'].created_at))
            // console.log(search);
        };
        fetchData().catch(console.error);
    }, [location.key])


    return (
        <div className="homepage">
            <div className="filter-list">
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

            </div>
            <div className="feeds">
                {
                    filteredPostList && 
                    Object.values(filteredPostList[listOrder]).map((value, index) => (
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