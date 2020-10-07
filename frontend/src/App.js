import React, { Component } from 'react';
import './app.css';
import BeautyStars from 'beauty-stars';


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
    const id= this.state.id;
    fetch('/targets/'+id)
    .then(res => {
      return (res.json());
     }).then(data => {
      console.log(data);
      this.setState({info: data.rows[0]})
      });
       
  }



  render() {
    return (
      <div className="App">
        <header className="title"> 
        <h1 className="title">Guest ratings and reviews</h1>
         <h2 className="rate">Average rate: {this.state.info.rating}</h2>
         <div className="wrapper">
        <h1 style={{ textAlign: "center", color: "#fff" }}>Beauty Stars</h1>
        <BeautyStars
          value={this.state.value}
          onChange={value => this.setState({ value })}
        />
      </div>
    <h3 className="photo">Review photo:
    <img src={this.state.info.image}></img>
    </h3>
    <h3 className="comment">Item name: {this.state.info.name} </h3>
        </header>
    <div className="container">
      <h1 className="tittle">Reviews </h1>
      <h3>{this.state.info.account}:</h3>
      <h2>{this.state.info.comment}</h2>
    </div>
        <button className="type" onClick={ this.handleClick.bind(this) }>next</button>
      </div>
    );
    
  }
  
}
export default App;
