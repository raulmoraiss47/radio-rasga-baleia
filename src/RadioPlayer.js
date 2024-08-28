import React, { useRef, useState } from 'react';
import './App.css'; // Certifique-se de que o caminho está correto

const RadioPlayer = () => {
  const audioRef = useRef(null);
  const [volume, setVolume] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    audioRef.current.play().then(() => {
      setIsPlaying(true);
    }).catch((error) => {
      console.error('Error playing audio:', error);
    });
  };

  const handlePause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  return (
    <div>
      <div className="player-container">
        <audio ref={audioRef} muted={false}>
          <source src="https://glaudiotecnology.srv.br/listen/r%C3%A1dio_rasga_baleia/baleiafm" type="audio/mp4" />
          Your browser does not support the audio element.
        </audio>

        <div className="player-controls">
          {!isPlaying && <button onClick={handlePlay}><i className="fas fa-play"></i></button>}
          {isPlaying && <button onClick={handlePause}><i className="fas fa-pause"></i></button>}
        </div>

        <div className="volume-container">
        <input
          id="volume"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
        <span className="volume-percentage">{Math.round(volume * 100)}%</span>
      </div>

      </div>

      <div className="footer">
        &copy; {new Date().getFullYear()} Criado por Raul Morais.
      </div>
    </div>
  );
};

export default RadioPlayer;