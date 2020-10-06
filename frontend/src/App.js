import React, { Component } from 'react';
import './app.css';


class App extends Component {
  consturctor(props) {
    this.state = {
      items: [],
      isLoaded: false,
    }
  }


  componentDidMount() {

    fetch('/targets/')
    .then(res => {
      return res.json();
    }).then(data => {
      console.log(data.rows)
    })
  }
handleClick() {
  console.log('Clicked');
}
  render() {
    return (
      <div className="App">
        <header className="title"> 
        <h1>Customer ratings and reviews</h1>
        <h2>Average rate</h2>
        <p>4.7</p>
        <h3>Reviews</h3>
        </header>
        <button className="type" onClick={ this.handleClick.bind(this) }>submit review</button>
      </div>
    );
  
}
};

export default App;
