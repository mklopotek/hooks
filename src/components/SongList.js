import React, { useState, useEffect } from 'react';
import uuid from 'uuid/v1'
import NewSongForm from './NewSongForm';

const SongList = (props) => {
    const [songs, setSongs] = useState(
        [
            { title: 'disco disoc ponad wszystko', id: 1 },
            { title: 'hip-hop hula hop', id: 2 },
            { title: 'britney pop song', id: 3 },
        ]
    )

    const [age, setAge] = useState(20)

    const addSong = (title) => setSongs([...songs, { title, id: uuid() }])


    const addYear = () => setAge(age + 1)

    useEffect(() => {
        console.log('hi, i observe age')
    }, [age])

    return (
        <div className="song-list">
            <ul>
                {
                    songs.map(({ title, id }) => <li key={id}>{title}</li>)
                }
            </ul>
            <NewSongForm addSong={addSong} />
            <button onClick={addYear}>Age + 1</button>
        </div>
    );
}

export default SongList;
