import React, { Component } from 'react';
import './app.css';
import BeautyStars from 'beauty-stars';
import Donut from 'react-svg-donuts';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      info: {rating: 5},
      number: {value: 5},
      isLoaded: false,
    }
  }
  

  componentDidMount() {
    fetch('/targets/1')
    .then(res => {
      return (res.json());
     }).then(data => {
      console.log(data);
      this.setState({info: data.rows[0]})
      }); 
  }

  handleClick() {
    console.log('it works');
  }



  render() {
    const progress = 100;
    const renderProgress = progress => <strong>{progress}%</strong>;
    return (
      <div className="app">
        <h1 className="display">Guest ratings and reviews</h1>
        <div className="title"> 
         <h2 className="rate">Average rate: {this.state.info.rating}
         </h2>
        <BeautyStars 
        className="star"
          value={this.state.value}
          onChange={value => this.setState({ value })}
        />
        <Donut 
        className="chart"
        progress={progress} onRender={renderProgress} 
        />
    </div>
    <div className="container"></div>
    <h3 className="photo">Review photo:
    <img src={this.state.info.image}></img>
    </h3>
    <h3 className="comment">Item name: {this.state.info.name} </h3>
      <h1 className="tittle">Reviews </h1>
      <h3>{this.state.info.account}:</h3>
      <h2>{this.state.info.comment}</h2>
        <button onClick={ this.handleClick.bind(this) }>Write a review</button>
      </div>
    );
    
  }
  
}
export default App;
