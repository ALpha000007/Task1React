import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('Hi All');
  const wordCount = text.trim().split(/\s+/).length;

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <div className="container">
        <center><h2>Responsive paragraph Word Counter</h2></center>
        <textarea
          value={text}
          onChange={handleChange}
          className="textArea"
          placeholder="Type your paragraph here..."
        />
        <p>Word Count: {wordCount}</p>
      </div>
    </div>
  );
}

export default App;
