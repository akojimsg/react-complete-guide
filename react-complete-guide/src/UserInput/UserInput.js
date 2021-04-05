import React from 'react'

const userInput = (props) => {

    const style = {
        padding: '5px',
        width: '50%',
        border: '1px solid #f0e'
    }

    return (
        <div>
            <p><input style={style} type="text" onChange={props.onchange} value={props.value} /></p>
        </div>
    );
}

export default userInput;