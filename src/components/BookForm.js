import React, { useContext, useState } from 'react'
import { BookContext } from '../context/BookContext';

const BookForm = (props) => {
    const { addBook } = useContext(BookContext)
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addBook(title, author)
        setTitle('')
        setAuthor('')
    }

    return (
        <form style={{ display: 'flex', 'flex-direction': 'row' }} onSubmit={handleSubmit}>
            <input type={'text'} placeholder={'Title'} value={title} onChange={e => setTitle(e.target.value)} required />
            <input type={'text'} placeholder={'Author'} value={author} onChange={e => setAuthor(e.target.value)} required />
            <button type={'submit'}>Add book</button>
        </form>
    )
}

export default BookForm