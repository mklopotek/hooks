import React, { useContext } from 'react'
import { BookContext } from '../context/BookContext';
import BookDetails from './BookDetails'

const BookList = (props) => {
    const { books } = useContext(BookContext)

    return books.length ? (
        <div className={'book-list'}>
            <ul>
                {books.map(book => <BookDetails book={book} key={book.id} />)}
            </ul>

        </div>
    ) : (

            <div className={'empty'}>No books Headers, really? :(</div>
        )
}

export default BookList