import React, { useContext } from 'react'
import { BookContext } from '../context/BookContext';

const NavBar = (props) => {
    const { books } = useContext(BookContext)

    return <div className={"navbar"}>
        <h1>Magda's reading List</h1>
        <p>Currently you have {books.length} books on your list...</p>
    </div>

}

export default NavBar