import React from 'react';


const userInput = (props) => {
  const inputStyle = {
      height: '20px',
      width: '60%',
      border: '2px solid #00b894',
      borderRadius: '4px',
      padding: '12px 20px'
  }



    return <input 
            type="text" 
            style={inputStyle}
            value={props.Currentname}
            onChange={props.changed}/>
};


export default userInput;