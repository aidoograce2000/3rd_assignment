
import React from 'react'
import Profile from './profile'

function Dashboard(props) {
    return (
        <div>

            <Profile
            profilename = {props.myname}
            profileage = {props.myage}
            />
        </div>
    )
}


export default Dashboard;
