import React from 'react'
import {Link} from 'react-router-dom'

const Sidebar = (props) => {
    return (
        <ul>
            <li><Link to="/admin/users">users</Link></li>
            <li><Link to="/admin/posts">posts</Link></li>
        </ul>
    )
}

export default Sidebar;
