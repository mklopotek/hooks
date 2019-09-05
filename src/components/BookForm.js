import React, { useContext, useState } from 'react'
import { BookContext } from '../context/BookContext';

const BookForm = (props) => {
    const { addBook } = useContext(BookContext)
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const onSubmit = () => {
        if (!title || !author) {
            return
        }

        addBook(title, author)
        setTitle('')
        setAuthor('')
    }

    return (
        <form style={{ display: 'flex', 'flex-direction': 'row' }}>
            <input type={'text'} placeholder={'Title'} value={title} onChange={e => setTitle(e.target.value)} />
            <input type={'text'}  placeholder={'Author'} value={author} onChange={e => setAuthor(e.target.value)} />
            <button type={'submit'} onClick={onSubmit}>Add book</button>
        </form>
    )
}

export default BookForm