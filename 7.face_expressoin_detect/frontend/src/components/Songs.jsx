import React, { useState, useRef } from "react";
import "./moodSongs.css";

const MoodSongs = ({ Songs }) => {
    const [isPlaying, setIsPlaying] = useState(null);
    const audioRefs = useRef([]);

    const handlePlayPause = (index) => {
        // Pause currently playing song
        if (isPlaying !== null && isPlaying !== index && audioRefs.current[isPlaying]) {
            audioRefs.current[isPlaying].pause();
        }

        // Toggle play/pause for clicked song
        if (isPlaying === index) {
            audioRefs.current[index].pause();
            setIsPlaying(null);
        } else {
            audioRefs.current[index].play();
            setIsPlaying(index);
        }
    };

    return (
        <div className="mood-songs">
            <h2>Recommended Songs</h2>

            {Songs.map((song, index) => (
                <div className="song" key={index}>
                    <div className="title">
                        <h3>{song.title}</h3>
                        <p>{song.artist}</p>
                    </div>

                    <div className="play-pause-button">
                        <audio
                            ref={(el) => (audioRefs.current[index] = el)}
                            src={song.audio}
                            onEnded={() => setIsPlaying(null)}
                        />
                        <button onClick={() => handlePlayPause(index)}>
                            {isPlaying === index ? (
                                <i className="ri-pause-circle-fill"></i>
                            ) : (
                                <i className="ri-play-circle-fill"></i>
                            )}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MoodSongs;
