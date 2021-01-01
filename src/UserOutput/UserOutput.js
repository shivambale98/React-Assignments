import React from 'react';
import './useroutput.css';

const userOutput = (props) => {
    return (
         <div className="output-box ">
             <p>Hi i am {props.name} from {props.team}</p>
             <p>I want to win the premier league this season</p>
         </div>
    );
};


export default userOutput;
