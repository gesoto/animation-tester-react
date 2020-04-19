import React, { useState } from "react";
import Animator from "./Animator";

const App = () => {

  const [state, setState] = useState(0);
  const [title, setTitle] = useState("Happy");

  const arr = ["Happy", "Blushing", "Broadcast", "Coffee Break", "Confused", "Curious", "Dismiss", "Entry", "General", "Giggle", "Juggling", "Listening", "Peek Left", "Peek Right", "Sad", "Smart Guidance", "Speak", "Thinking", "Thumbs Up", "Waiting", "Walking Left", "Walking Right", "Warning", "Wave", "Worried", "Yoyo"];

  return (
    <div class="container">
      <div class="animator">
        <Animator currentanimation={state} />
      </div>
      <div class="buttons">
        <div class="title">Currently playing: {title}</div>
        {arr.map((i, n) => (<button onClick={() => {setState(n); setTitle(i)}}>{i}</button>))}
      </div>
    </div>
  );
};

export default App;
