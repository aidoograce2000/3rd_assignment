import React from 'react'
import Notifications from './notification'

function Profile(props) {
    return (
        <div>
            <Notifications
            notifications1={props.profilename}
            notifications2={props.profileage}

            />
        </div>
    )
}

export default Profile;