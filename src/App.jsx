import React from 'react';
import './App.css';
import { drumPads } from './assets/drumPads.js';
import { DrumPad } from './components/DrumPad.jsx';
function App() {
  return (
    <>
      <h2>Drum Machine</h2>
      <div id="drum-machine">
        <div className="pad">
          {drumPads.map((pad) => (
            <DrumPad
              key={pad.id}
              id={pad.id}
              letter={pad.letter}
              src={pad.src}
              text={pad.text}
            />
          ))}
        </div>
        <div id="controls-container">
          <p id="display"></p>
        </div>
      </div>
    </>
  );
}

export default App;
