import React, { Component } from 'react';
import './app.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="title"> 
        <h1>Customer ratings and reviews</h1>
        <h2>Average rate</h2>
        <h3>Reviews</h3>
        </header>
        <button className="type">submit review</button>
      </div>
    );
  
}
};

export default App;
