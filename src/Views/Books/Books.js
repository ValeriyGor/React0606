import React from "react";
import Card from "../../Components/Card/Card";
import Book from "../../Components/Image/book.avif";
import style from "./Books.css";


class Books extends React.Component {
    render() {
        return (
            <div>
                <h1 className="books">Best books 2023</h1>
                <div className="books-container">
                <Card img= {Book}/>
                <Card img= {Book}/>
                <Card img= {Book}/>
                </div>
            </div>
        )
    }
}

export default Books