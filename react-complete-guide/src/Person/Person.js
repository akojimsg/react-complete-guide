import React from 'react'
import './Person.css'
//import { useState } from 'react';

const Person = ( props ) => {
    
    // const [personState, setState] = useState({name: props.name, age: props.age});
    
    // const handleNameChange = (event) => {
    //     setState( 
    //         { name: event.target.value, age: personState.age }
    //       )
    //   }

    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input id={props.id} type="text" onChange={props.changed} defaultValue={props.name} />
        </div>
    )
};

export default Person;