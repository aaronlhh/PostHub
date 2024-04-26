import React from "react";
import { Outlet, Link } from 'react-router-dom'

const Layout = () => {
    return (
        <div className="whole-page">
            <div className="navbar">
                <span>
                    <Link 
                        to='/' 
                        className="web-title" >
                            HobbyHub
                    </Link>
                </span>
                <input 
                    type="text" 
                    className="search-query"
                    placeholder="Search"    
                />
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