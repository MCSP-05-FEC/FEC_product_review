import React, { Component } from 'react';
import './app.css';


class App extends Component {
  consturctor(props) {
    this.state = {
      data: [],
      info: null,
      isLoaded: false,
    }
  }


  componentDidMount() {
    fetch('/targets/1')
    .then(res => {
      return res.json();
    }).then(data => {
      this.setState({info: data});
      });
  }


  
  handleClick() {
    console.log('Clicked');
  }
  render() {
    return (
      <div className="App">
        <header className="title"> 
        <h1 className="title">Customer ratings and reviews</h1>
        <h2 className="rate">Average rate</h2>
        <h3 className="photo">Review photo</h3>
        <h3 className="comment">Reviews</h3>
        </header>
        <div className="container"></div>
        <button className="type" onClick={ this.handleClick.bind(this) }>submit review</button>
      </div>
    );
    
  }
  
}
export default App;
