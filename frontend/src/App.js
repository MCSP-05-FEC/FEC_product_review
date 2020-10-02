import React, { Component } from 'react';
import './app.css';
import Review from './reviews';

class App extends Component {
    render() {
      return (
        <div className={"App"}>
      <Review />
    </div>
  ) 
};
}

export default App;
