import React, { createContext, useState } from 'react'
import uuid from 'uuid/v1'

export const BookContext = createContext()

const BookContextProvider = (props) => {

    const [books, setBooks] = useState([
        { title: 'Becoming', author: 'Michelle Obama', id: 1 },
        { title: 'Niezwyciężony', author: 'Nick Vujicic', id: 2 },
        { title: 'Siła ambicji', author: 'Mo Farah', id: 3 },
    ])

    const addBook = (title, author) => setBooks([...books, { title, author, id: uuid() }])
    const removeBook = (id) => setBooks(books.filter(book => book.id !== id))


    return (
        <BookContext.Provider value={{ books, addBook, removeBook  }}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider