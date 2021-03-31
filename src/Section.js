import React, { Component } from 'react'
import Axios from 'axios';
import Item from './Item';

export default class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {

            menuItems: [],
        }
    };

    componentDidUpdate() {
        window.localStorage.setItem('menuItems', JSON.stringify(this.state.menuItems))
      }

    componentDidMount() {
        let menuItems = window.localStorage.getItem('menuItems')

        if (menuItems) {
          this.setState({ menuItems: JSON.parse(menuItems) })
        }

        let apiURL = 'http://awesomeincbootcampapi-ianrios529550.codeanyapp.com:3000/public/api/menu/type/' + this.props.section.id
    
        Axios.get(apiURL)
            .then((response) => {
                console.log(response.data)
                this.setState({ menuItems: response.data })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {

        let { menuItems } = this.state;

        return (
            <div>
               <hr></hr>    
               <b> <u>{this.props.section.type} </u></b>
                <h5>
                    {menuItems.map((item, index) => <Item key={index} item={item} />)}
                </h5>
                <br></br>
            </div>
        )
    }
}