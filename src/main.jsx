import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../routes/Layout.jsx'
import CreatePage from '../routes/CreatePage.jsx'
import UpdatePage from '../routes/UpdatePage.jsx'
import PostDetail from '../routes/PostDetail.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />} >
                    <Route index={true} element={<App />} />    
                    <Route path='/create' element={<CreatePage />} />
                    <Route path='/detail/:post_id' element={<PostDetail />} />
                    <Route path='/update/:post_id' element={<UpdatePage />} />
                </Route> 
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)
