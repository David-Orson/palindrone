import React from 'react';

import "../css/Output.css"

const Output = (props) => {

  console.log(props)
  return (
    <div className="output">
      <p className="output-tagline">{props.palindrone === 'true' ? ('The result of the test is:') : (props.palindrone === 'false' ? ('The result of the test is:') : (props.palindrone === 'error' ? ('Please enter a string to test!') : (null)))} </p>
      <p className="output-string">{props.palindrone === 'true' ? (<div><p className="result" >True</p><p className="result-tagline">The string you entered is a palindrone</p></div>) : (props.palindrone === 'false' ? (<div><p className="result">False</p><p>the string you entered is not a palindrone</p></div>) : (null))}</p>
    </div>
  )
}

export default Output;