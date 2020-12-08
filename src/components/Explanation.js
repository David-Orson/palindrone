import React, { useState } from 'react';

import "../css/Explanation.css"

import arrowDown from "../Assets/arrow-down.svg"

const Explanation = () => {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    if (open === false) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }

  return (
    <div className={`explanation ${(open ? ('explanation-opened') : (null))}`} >
      <div className="dropdown-title-container">
        <p className="explanation-title">More info, Solutions and Explanation</p>
        <img src={arrowDown} className={`arrow-down ${open ? 'arrow-open' : null}`} onClick={toggleOpen} />
      </div>
      <div className="explanation-dropdown">
        <p className="explanation-text">This coding challenge is to check if an entered string is a palindrone or not by outputting true or false apon testing the string.<br/><br />
        There are 3 cases that need to be handled for the application to run smoothly: the true case if the string is a palindrone, the false case if the string is not a palindrone and an error case if the user starts a test without a string entered into the input. <br/><br />
        The methodology for this challenge is to first check if there is a string, if not then the output will be error and a case will be handled with UI output. If there is a string entered then the string will be reversed (In the same way as the previous challenge) and will be equality checked against its original un-reversed self.<br/>
        If the equality check shows true, then the output will be true and if not then false. The true or false outputs are then ran through the .toString() helper function so that they can be used as text output and css classes in the UI outut.  
        </p>
        {/* <div className="code-container">
          <p>
            <span className="yellow">const</span><span className="cyan"> reverser</span> =<span className="purple"> (string)</span><span className="yellow"> ={">"}</span> <span className="purple">{"{"}</span><br/>
            <span className="yellow indent">let</span><span className="purple"> reversed</span>{' = '}<span className="orange">''</span>{';'}<br />
            <br />
            <span className="yellow indent">for</span><span className="cyan"> (</span><span className="yellow">let</span><span className="purple"> character</span><span className="yellow"> of</span><span className="purple"> string</span><span className="cyan">){' {'}</span><br />
            <span className="purple indent">reversed</span> = <span className="purple">character</span><span className="yellow"> + </span><span className="purple">reversed</span>;<br />
            <span className="cyan indent">{'}'}</span><br />
            <br />
            <span className="cyan indent">setReversedString(</span><span className="purple">reversed</span><span className="cyan">)</span><br />
            <span className="purple">{'}'}</span>
          </p>
        </div>
        <p className="explanation-text">
          Another Solution that could be used is to use the reduce function on the array with much the same logic as the previous solution.<br /><br />
          We first split the string into an array of the characters using the '.split()' method, then we use the reduce function to iterate over the array and reduce it into a single value, being a string. The reducer function takes two arguments as a higher order function, the first being a function with the arguments 'rev' and 'char', the second argument is the initialization value which we set as an empty string.<br /><br />
          We contain all of this logic inside the 'setReversedString()' React function for use inside other components of the app.<br /><br />
        </p>
        <div className="code-container-extra">
          <p>
          <span className=""></span>
          <span className="yellow">const</span><span className="cyan"> reverser</span> =<span className="purple"> (string)</span><span className="yellow"> ={">"}</span> <span className="purple">{"{"}</span><br/>
          <span className="cyan indent">setReversedString(</span><span className="purple">string</span>.<span className="cyan">split</span><span className="yellow">(</span><span className="orange">''</span><span className="yellow">)</span>.<span className="cyan">reduce</span><span className="yellow">(</span><span className="purple">(rev</span>,<span className="purple">char)</span><span className="yellow"> ={'>'} </span><span className="purple">char</span><span className="yellow"> + </span><span className="purple">rev</span>,<span className="orange">''</span><span className="yellow">)</span><span className="cyan">)</span><br />
          <span className="purple">{'}'}</span>
          </p>
        </div> */}
      </div>
    </div>
  )
}

export default Explanation;