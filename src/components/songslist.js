import React from 'react'
import Song from './Song';

export default function Songslist(props) {
  return (
    props.SongsList.map((song) => {
        return <Song song={song} key={song.name} />;
    }
    )
  )
}
