import React, { Component } from 'react'

class SingleBook extends Component {

    getBookDetailsWithShelf(book, myBooks) {
        const bookIndex = myBooks.findIndex(singleBook => singleBook.id === book.id)
        if (bookIndex >= 0) {
            return myBooks[bookIndex]
        } else {
            book.shelf = 'none'
            return book
        }
    }

    render() {
        const { book, handleBookMove, myBooks } = this.props
        const bookDetails = (book.shelf) ? book : this.getBookDetailsWithShelf(book, myBooks)
        const authors = (bookDetails.authors && bookDetails.authors.length > 0 ) ? bookDetails.authors.join(', ') : bookDetails.authors
        const backgroundImage = (book.imageLinks && book.imageLinks.thumbnail) ? `url(${book.imageLinks.thumbnail})` : 'none'

        return (
            <li key={book.id}>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{
                            width: 128,
                            height: 193,
                            backgroundImage
                        }}></div>
                        <div className="book-shelf-changer">
                            <select value={bookDetails.shelf} onChange={(event) => handleBookMove(event, bookDetails)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading
                                </option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{ bookDetails.title }</div>
                    <div className="book-authors">{ authors }</div>
                </div>
            </li>
        )
    }
}

export default SingleBook
