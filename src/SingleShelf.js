import React, { Component } from 'react'
import SingleBook from "./SingleBook";

const SingleShelf = props => {
    const { listedBooks, handleBookMove, isShelved, myBooks } = props;

    if(!listedBooks || listedBooks.length < 1) return ''

    let shelfTitle;

    if(isShelved) {
        switch(listedBooks[0].shelf) {
            case 'currentlyReading':
                shelfTitle = 'Currently Reading'
                break
            case 'wantToRead':
                shelfTitle = 'Want to Read'
                break
            case 'read':
                shelfTitle = "Read"
            default:
                shelfTitle = "None"
        }
    }
    const shelfHeader = (isShelved) ? <h2 className="bookshelf-title">{ shelfTitle }</h2> : ''

    return (
        <div className="bookshelf">
            { shelfHeader }
            <div className="bookshelf-books">
                <ol className="books-grid">
                    { listedBooks.map(book => <SingleBook key={book.id} book={book} listedBooks={listedBooks} myBooks={myBooks} handleBookMove={handleBookMove}/>) }
                </ol>
            </div>
        </div>

    )

}

export default SingleShelf