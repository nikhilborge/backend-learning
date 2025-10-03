import React, { useState } from "react";
import "./moodSongs.css";

const MoodSongs = ({ Songs }) => {
    const [isplaying, setIsPlaying] = useState(null);

    const handlePlayPause = (index) => {
        if (isplaying === index) {
            setIsPlaying(null);
        } else {
            setIsPlaying(index);
        }
    };

    return (
        <div className="mood-songs">
            <h2>Recommonded Songs</h2>
            {Songs.map((song, index) => (
                <div className="song" key={index}>
                    <div className="title">
                        <h3>{song.title}</h3>
                        <p>{song.artist}</p>
                    </div>
                    <div className="play-pause-button">
                        {
                            isplaying === index &&
                            <audio src={song.audio} autoPlay={isplaying === index} controls style={{ display: 'none' }}></audio>
                        }
                        <button onClick={() => handlePlayPause}>
                            {isplaying === index ? (
                                <i className="ri-play-circle-fill"></i>
                            ) : (
                                <i className="ri-pause-line"></i>
                            )}
                        </button>

                    </div>
                </div>
            ))}
            Songs
        </div>
    );
};

export default MoodSongs;
