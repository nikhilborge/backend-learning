import React, { useState } from 'react'
import "./moodSongs.css"

const MoodSongs = () => {
    const [Songs, setSongs] = useState([
        {
            title: "test title",
            artist: 'test_artist',
            url: "test_url"
        },
        {
            title: "test title",
            artist: 'test_artist',
            url: "test_url"
        },
        {
            title: "test title",
            artist: 'test_artist',
            url: "test_url"
        },
        {
            title: "test title",
            artist: 'test_artist',
            url: "test_url"
        },
        {
            title: "test title",
            artist: 'test_artist',
            url: "test_url"
        },
    ])

    return (
        <div className='mood-songs'>
            <h2>Recommonded Songs</h2>
            {Songs.map((song, index) => (
                <div className='song' key={index}>
                    <div className="title">
                        <h3>{song.title}</h3>
                        <p>{song.artist}</p>
                    </div>
                    <div className="play-pause-button">
                        <i className="ri-pause-line"></i>
                        <i className="ri-play-circle-fill"></i>
                    </div>

                </div>
            ))}
            Songs
        </div>
    )
}

export default MoodSongs
