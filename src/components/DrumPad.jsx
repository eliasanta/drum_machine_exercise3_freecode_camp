import { useEffect, useRef } from 'react';
import './drumpad.css';
export function DrumPad({ id, letter, src, text }) {
  const audioRef = useRef(null);

  const playSound = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
    document.getElementById('display').innerText = text;
  };
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key.toUpperCase() === letter) {
        playSound();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [letter]);

  return (
    <div className="drum-pad" id={id} onClick={playSound}>
      {letter}
      <audio ref={audioRef} className="clip" id={letter} src={src}></audio>
    </div>
  );
}
