import React from 'react'
import { Route } from 'react-router-dom'

import './App.css'
import Shelves from './Shelves'
import SearchPage from './SearchPage'
import {getAll} from "./BooksAPI";
import {update} from "./BooksAPI";

class BooksApp extends React.Component {

    state = {
        allBooks: []
    }

    componentDidMount() {
        getAll()
            .then(response => this.setState({ allBooks: response }))
            .catch(error => console.log('error fetching books:' + error))

    }


    handleBookMove(event, book) {
        const newShelf = event.target.value

        const bookIndex = this.state.allBooks.findIndex(singleBook => singleBook.id === book.id)
        if(bookIndex < 0) {
            book.shelf = newShelf;
            this.setState({ allBooks: [...this.state.allBooks, book]})
        } else {
            this.state.allBooks[bookIndex].shelf = newShelf
            this.setState({ allBooks: this.state.allBooks })
        }

        update(book, newShelf)
            .then(() => console.log("successfully update"))
            .catch(error => console.log("error updating:", error))
    }

    render() {
        if (this.state.allBooks.length < 1) return 'loading...'

        return (
            <div className="app">
                <Route path="/" exact render={() => <Shelves myBooks={this.state.allBooks} handleBookMove={this.handleBookMove.bind(this)} /> } />
                <Route path={"/search"} render={() => <SearchPage myBooks={this.state.allBooks} handleBookMove={this.handleBookMove.bind(this)} />} />
            </div>
        )
    }
}

export default BooksApp
