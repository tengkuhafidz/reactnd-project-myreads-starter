import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import {search, update, get} from './BooksAPI'
import SingleShelf from './SingleShelf'

class SearchPage extends Component {

    state = {
        filteredBooks: [],
    }

    handleSearch(event) {
        const query = event.target.value
        search(query.trim())
            .then(books => this.setState({ filteredBooks: books}))
            .catch(() => {
                this.setState({ filteredBooks: []})
            })
    }

    render() {
        const { myBooks, handleBookMove } = this.props

        const bookResults = (!this.state.filteredBooks || this.state.filteredBooks.error || this.state.filteredBooks.length < 1) ? ''
                                : <SingleShelf listedBooks={this.state.filteredBooks} myBooks={myBooks} handleBookMove={handleBookMove}/>

        return (
                    <div className="search-books">
                        <div className="search-books-bar">
                            <Link className="close-search" to="/">Close</Link>
                            <div className="search-books-input-wrapper">

                                <input type="text" placeholder="Search by title or author" onChange={(event) => this.handleSearch(event)}/>

                            </div>
                        </div>
                        <div className="search-books-results">
                            { bookResults }
                        </div>
                    </div>
        )
    }
}

export default SearchPage