import React, { Component } from 'react'
import './App.css';
import Axios from 'axios';
import Section from './Section'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

      menuSections: []
    }
  };

  componentDidUpdate() {
    window.localStorage.setItem('menuSections', JSON.stringify(this.state.menuSections))
  }
  componentDidMount() {


    let apiURL = 'http://awesomeincbootcampapi-ianrios529550.codeanyapp.com:3000/public/api/menu/sections'

    Axios.get(apiURL)
        .then((response) => {
            console.log(response.data)
            this.setState({ menuSections: response.data})
        })
        .catch(function (error) {
            console.log(error);
        })

}

  render() {
    return (
      <div className="App">
        <br></br>
        <h1><b>Yo Mommas Kitchen</b></h1>
        <h4> 348 E Main St, Lexington, KY</h4>
        <h5>Open Friday only 11PM - 2PM</h5>
        <br></br>
        <br></br>
        <h1>
        {this.state.menuSections.map((section, index) => <Section key={index} section={section} />)}
        </h1>
        <br></br>
      </div>
    );
  }
}


