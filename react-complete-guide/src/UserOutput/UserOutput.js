import React from  'react'
import UserInput from '../UserInput/UserInput'
import './UserOutput.css'

const userOutput = (props) => {
    return(
        <div className="Output">
            <p>User name - {props.username}</p>
            <p>Enter new user name</p>
            <UserInput onchange={props.changed} value={props.username}/>
        </div>
    )
}

export default userOutput;