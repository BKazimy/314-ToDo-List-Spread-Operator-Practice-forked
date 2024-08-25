import React, { useState } from "react";

function App() {
  // initialize virtual cookies
  const [toDo, setToDo] = useState([]);
  const [inputTxt, setInputTxt] = useState("");

  function clicked(event) {
    // ...list list concatinator
    // adds inputTxt to toDo list
    setToDo((prev) => [inputTxt, ...prev]);
    // cleares the input
    setInputTxt("");
    console.log(toDo);
  }

  function changed(event) {
    setInputTxt(event.target.value);
    console.log(inputTxt);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={changed} value={inputTxt} />
        <button onClick={clicked}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {toDo.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
