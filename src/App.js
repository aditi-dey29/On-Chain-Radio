// App.js

import "./App.css";
import Navbar from "./components/navbar";
import SongsList from "./components/songslist";
import Player from "./components/player";

function App() {
  const songdata = [
    {
      name: "Kesariya",
      artist: "Arijit Singh",
      audioSrc: "song1.mp3",
    },
    {
      name: "Bol Do Na Zara",
      artist: "Armaan malik",
      audioSrc: "song2.mp3",
    },
    {
      name: "Bekhalayi",
      artist: "Sachet Tondon",
      audioSrc: "song3.mp3",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="main-content">
        <h1>Your Songs</h1>
        <SongsList SongsList={songdata} />
        <Player songs={songdata} />
      </div>
    </>
  );
}

export default App;
