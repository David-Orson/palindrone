import React, { useState } from 'react';

import "../css/Code.css"

import arrowDown from "../Assets/arrow-down.svg"

const Code = () => {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    if (open === false) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }


  return (
    <div className={`code ${(open ? ('code-opened') : (null))}`} >
      <div className="dropdown-title-container">
        <p className="code-title">Code used</p>
        <img src={arrowDown} className={`arrow-down ${open ? 'arrow-open' : null}`} onClick={toggleOpen} />
      </div>
      
      {/* {open ? ( */}<div className="code-dropdown">
        <p className="code-tagline">The code used for the functionality of this challenge is:</p>
        <div className="code-container">
          <p><span className="yellow">const</span><span className="cyan"> PalindroneTest</span> =<span className="purple"> (string)</span><span className="yellow"> ={">"}</span> <span className="purple">{"{"}</span><br/> 
            <span className="yellow indent">if</span><span className="cyan">(</span><span className="purple">string</span><span className="cyan">) {'{'}</span><br/>
            <span className="yellow indent2">let </span><span className="purple">reversed </span>= <span className="yellow">(</span><span className="purple">string</span>.<span className="cyan">split</span><span className="purple">(</span><span className="orange">''</span><span className="purple">)</span>.<span className="cyan">reverse</span><span className="purple">()</span>.<span className="cyan">join</span><span className="purple">(</span><span className="orange">''</span><span className="purple">)</span><span className="yellow">)</span>;<br/><br/>
            <span className="cyan indent2">setPalindrone</span><span className="yellow">(</span><span className="purple">(</span><span className="cyan">(</span><span className="purple">reversed </span><span className="yellow">=== </span><span className="purple">string</span>.<span className="cyan">toString()</span><span className="purple">)</span><span className="yellow">)</span>;<br/>
            <span className="cyan indent2">{'}'}</span><span className="yellow"> else </span><span className="cyan">{'{'}</span><br />
            <span className="cyan indent2">setPalindrone</span><span className="yellow">(</span><span className="orange">'error'</span><span className="yellow">)</span><br/>
            <span className="cyan indent">{'}'}</span><br />
            <span className="purple">{'}'}</span>
          </p>
        </div>
      </div> {/* : (null)} */}
    </div>
  )
}

export default Code;