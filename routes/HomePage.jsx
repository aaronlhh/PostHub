import React, { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import { supabase } from "../src/client";

const HomePage = () => {
    const [listOrder, setListOrder] = useState(0);
    const [postList, setPostList] = useState(null);
    const [search, setSearch] = useState('');
    const [filteredPostList, setFilterPostList] = useState(null);

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
            setFilterPostList([dataByTime.data, dataByUpvote.data]);
            // console.log(new Date(data['0'].created_at))
        };
        fetchData().catch(console.error);
    }, [])

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
        let newTimeData = Object.values(postList[0]).filter((value) => (
            value.title.toLowerCase().includes(e.target.value)
        ))
        let newTimeUpvote = Object.values(postList[1]).filter((value) => (
            value.title.toLowerCase().includes(e.target.value)
        ))
        setFilterPostList([newTimeData, newTimeUpvote]);
        console.log(filteredPostList);
    }

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


                <input 
                    type="text" 
                    className="search-query"
                    placeholder="Search"
                    value={search}
                    onChange={handleSearchChange}
                />
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