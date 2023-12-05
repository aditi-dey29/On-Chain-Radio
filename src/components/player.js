// Player.js

import React, { useState } from "react";
// import "./Player.css";

function Player({ songs }) {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const currentSong = songs[currentSongIndex];

  const togglePlay = () => {
    const audio = document.getElementById("audioPlayer");
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  const playPauseIcon = () => {
    const audio = document.getElementById("audioPlayer");
    return audio.paused ? "▶" : "||";
  };

  return (
    <div className="my-player">
      <div className="player-controls">
        <div className="song-info">
          <img src={currentSong.albumCover} alt={currentSong.name} />
          <div className="song-details">
            <h2>{currentSong.name}</h2>
            <p>{currentSong.artist}</p>
          </div>
        </div>
        <div className="playback-controls">
          <button className="control-button" onClick={() => setCurrentSongIndex(prev => (prev === 0 ? songs.length - 1 : prev - 1))}>⏮</button>
          <button className="control-button" onClick={togglePlay}>{playPauseIcon()}</button>
          <button className="control-button" onClick={() => setCurrentSongIndex(prev => (prev === songs.length - 1 ? 0 : prev + 1))}>⏭</button>
        </div>
      </div>
      <div className="progress-bar">
        <div className="progress-filled"></div>
      </div>
      <audio id="audioPlayer" src={currentSong.audioSrc} controls>
        Your browser does not support the audio tag.
      </audio>
    </div>
  );
}

export default Player;
