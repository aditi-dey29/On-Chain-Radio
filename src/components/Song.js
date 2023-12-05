import React from 'react';

export default function Song(props) {
  return (
    <div className='song-container'>
      <div className='song-item'>
        <div>
          <img src="song1.jpg" alt="Song 1" />
        </div>
        <div className='song-details'>
          <h3>{props.song.name}</h3>
          <p>{props.song.artist}</p>
        </div>
        <div className='play-icon'>&#9654;</div>
        <div className='button-container'>
          <button type="button" className="btn btn-info">Pay Tips</button>
        </div>
      </div>
    </div>
  );
}

