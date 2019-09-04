import React, { useState } from 'react';
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

    const addSong = (title) => {
        setSongs([...songs, { title, id: uuid() }])
    }

    return (
        <div className="song-list">
            <ul>
                {
                    songs.map(({ title, id }) => <li key={id}>{title}</li>)
                }
            </ul>
            {/* <button onClick={addSong}>Add a song for Magda's recommendation list ;)</button> */}
            <NewSongForm addSong={addSong}/>
        </div>
    );
}

export default SongList;
