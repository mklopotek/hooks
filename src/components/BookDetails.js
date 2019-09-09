import React, { useContext } from 'react'
import { BookContext } from '../context/BookContext';
import { REMOVE_BOOK } from '../reducers/bookReducers'

const BookDetails = (props) => {
    const { book: { title, id, author } } = props
    const { dispatch } = useContext(BookContext)
    return (
        <li onClick={() => dispatch({ type: REMOVE_BOOK, id })}>
            <div className={"title"}>{title}</div>
            <div className={'author'}>{author}</div>
        </li>
    )
}

export default BookDetails