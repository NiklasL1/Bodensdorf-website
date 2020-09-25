import React from 'react'
import ListForm from './ListForm'
import Users from './Users'
import { Link } from "react-router-dom";

const ManagementPage = () => {
    return (
        <div>
            <ListForm /> 
            <Users />
            <p><Link to="/">Home</Link> </p>            
        </div>
    )
}

export default ManagementPage
