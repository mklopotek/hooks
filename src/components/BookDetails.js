import React, { useContext } from 'react'
import { BookContext } from '../context/BookContext';

const BookDetails = (props) => {
    const { book: { title, id, author } } = props
    const { removeBook } = useContext(BookContext)
    return (
        <li>
            <div className={"title"}>{title}</div>
            <div className={'author'}>{author}</div>
        </li>
    )
}

export default BookDetails