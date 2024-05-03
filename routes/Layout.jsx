import React, { useState } from "react";
import { Outlet, Link, useNavigate } from 'react-router-dom'

const Layout = () => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    const handleSearchChange = (e) => {
        navigate("/", {state: {search: search}});
        setSearch("");
        window.location = "/";
    }

    return (
        <div className="whole-page">
            <div className="navbar">
                <span>
                    <Link 
                        to='/' 
                        className="web-title" >
                            PostHub
                    </Link>
                </span>
                <div className="search_input">
                    <input 
                        type="text" 
                        className="search-query"
                        placeholder="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <div 
                        className="search-img"
                        onClick={handleSearchChange}
                    >🔎</div>
                </div>
                <div className="nav-link">
                    <Link to='/' >
                        Home
                    </Link>
                    <div className="gap"></div>
                    <Link to='/create' >
                        Create New Post
                    </Link>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default Layout;