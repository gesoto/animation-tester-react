import React, { useEffect, createRef } from "react";
import lottie from "lottie-web";
import happy from "./json-animations/happy.json";
import blushing from "./json-animations/blushing.json";
import broadcast from "./json-animations/broadcast.json";
import coffeebreak from "./json-animations/coffeebreak.json";
import confused from "./json-animations/confused.json";
import curious from "./json-animations/curious.json";
import dismiss from "./json-animations/dismiss.json";
import entry from "./json-animations/entry.json";
import general from "./json-animations/general.json";
import giggle from "./json-animations/giggle.json";
import juggling from "./json-animations/juggling.json";
import listening from "./json-animations/listening.json";
import peekleft from "./json-animations/peekleft.json";
import peekright from "./json-animations/peekright.json";
import sad from "./json-animations/sad.json";
import smartguidance from "./json-animations/smartguidance.json";
import speak from "./json-animations/speak.json";
import thinking from "./json-animations/thinking.json";
import thumbsup from "./json-animations/thumbsup.json";
import waiting from "./json-animations/waiting.json";
import walkingleft from "./json-animations/walkingleft.json";
import walkingright from "./json-animations/walkingright.json";
import warning from "./json-animations/warning.json";
import wave from "./json-animations/wave.json";
import worried from "./json-animations/worried.json";
import yoyo from "./json-animations/yoyo.json";

const App = props => {
  const arr = [happy, blushing, broadcast, coffeebreak, confused, curious, dismiss, entry, general, giggle, juggling, listening, peekleft, peekright, sad, smartguidance, speak, thinking, thumbsup, waiting, walkingleft, walkingright, warning, wave, worried, yoyo];

  let animationContainer = createRef();

  useEffect(() => {
    let animationdata = arr[props.currentanimation];
    lottie.destroy();
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationdata
    });
    console.log("lottie");
  });

  return (
    <div className="App">
      <div className="animation-container" ref={animationContainer} />
    </div>
  );
};

export default App;
