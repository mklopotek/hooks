import React, { useState } from 'react'

const NewSongForm = (props) => {

    const [title, setTitle] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        props.addSong(title)
        setTitle('')
    }

    return <form onSubmit={handleSubmit}>
        <label>Song name:</label>
        <input type={'text'} value={title} onChange={(event) => setTitle(event.target.value)} required />
        <input type={'submit'} value={'add song'} />

    </form>
}

export default NewSongForm