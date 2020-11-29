import React, { useState } from 'react';

import './App.css';

import Header from './components/Header';
import Input from './components/Input';
import Output from './components/Output';
import Code from './components/Code';
import Explanation from './components/Explanation';

const App = () => {
  const [string, setString] = useState('')
  const [palindrone, setPalindrone] = useState(null);

  const reverser = (string) => {
    if (string) {
      let reversed = (string.split('').reverse().join(''))

      setPalindrone(((reversed === string).toString()));
    } else {
      setPalindrone('error')
    }
    


    /* let reversed = '';

    for (let character of string) {
      reversed = character + reversed;
    }

    setReversedString(reversed) */

    /* setReversedString(string.split('').reduce((rev, char) => char + rev, '')); */
  }

  return (
    <div className="app-container">
      <div className="app">
        <Header />
        <div className="app-main">
          <Input string={string} setString={setString} reverser={reverser} />
          <Output palindrone={palindrone} />
          <p className="sign">App by David Orson</p>
        </div>
        <div className="app-secondary">
          <Code />
          <Explanation />
        </div>
      </div>
    </div>
  )
}

export default App;