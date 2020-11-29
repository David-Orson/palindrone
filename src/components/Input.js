import React from 'react';

import "../css/Input.css"

const Input = (props) => {
  const {string, setString, reverser} = props
  
  const handleSubmit = (e) => {
    e.preventDefault();
    reverser(string)
  } 

  return (
    <div className="input">
      <form className="input-form" onSubmit={handleSubmit} >
        <label className="input-label">Enter Your String!</label>
        <input className="input-input" type="text" value={string} onChange={(e) => setString(e.target.value)}  />
        <button className="input-button">TEST</button>
      </form>
    </div>
  )
}

export default Input;