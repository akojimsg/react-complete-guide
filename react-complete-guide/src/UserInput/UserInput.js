import React from 'react'

const UserInput = (props) => {

    const style = {
        padding: '5px',
        width: '200px',
        border: '1px solid #f0e'
    }

    return (
        <div>
            <p><input style={style} type="text" onChange={props.onchange} value={props.value} /></p>
        </div>
    );
}

export default UserInput;