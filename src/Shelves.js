import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { getAll, update }  from './BooksAPI'
import SingleShelf from './SingleShelf'

class Shelves extends Component {


    getCurrentlyReading(myBooks) {
        return myBooks.filter(book => book.shelf === 'currentlyReading')
    }

    getWantToRead(myBooks) {
        return myBooks.filter(book => book.shelf === 'wantToRead')
    }

    getRead(myBooks) {
        return myBooks.filter(book => book.shelf === 'read')
    }


    render() {
        const { myBooks, handleBookMove } = this.props

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <SingleShelf myBooks={myBooks} listedBooks={this.getCurrentlyReading(myBooks)} handleBookMove={handleBookMove} isShelved/>
                        <SingleShelf myBooks={myBooks} listedBooks={this.getWantToRead(myBooks)} handleBookMove={handleBookMove} isShelved/>
                        <SingleShelf myBooks={myBooks} listedBooks={this.getRead(myBooks)} handleBookMove={handleBookMove} isShelved/>
                    </div>
                </div>
                <div className="open-search">
                    <Link to={"/search"}>Add a book</Link>
                </div>
            </div>
        )
    }
}

export default Shelves