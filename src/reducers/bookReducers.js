import uuid from 'uuid/v1'

export const ADD_BOOK = 'ADD_BOOK'
export const REMOVE_BOOK = 'REMOVE_BOOK'

export const bookReducer = (state, action) => {
    switch (action.type) {
        case ADD_BOOK:
            return [...state, { title: action.book.title, author: action.book.title, id: uuid() },]
        case REMOVE_BOOK:
            return state.filter(({ id }) => id !== action.id)
        default:
            return state
    }
}