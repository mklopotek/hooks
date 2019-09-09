import React, { createContext, useReducer, useEffect } from 'react'

import { bookReducer } from '../reducers/bookReducers'

export const BookContext = createContext()

const BookContextProvider = (props) => {
    
    const [books, dispatch] = useReducer(bookReducer, [], () => {
        const localBooks = localStorage.getItem('magda_training_app_booklist')
        return localBooks ? JSON.parse(localBooks) : []
    })

    useEffect(() => {
        localStorage.setItem('magda_training_app_booklist', JSON.stringify(books))
    }, [books])

    return (
        <BookContext.Provider value={{ books, dispatch }}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider