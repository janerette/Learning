import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var library = [
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
   ];


{/* {library.map(function(Book) {console.log(Book.author)})} */}
class App extends Component {


  render() {
    return (
      <div className="App">
        <div className="row">
        <h1>hi</h1>
        <section>
        <ul>
        {
          library.map(function(book) {
            return (
              <li> {book.title} </li>
             )
          })

        }
        </ul>

        </section>
        </div>
     </div>
    );
  }
}


export default App;
