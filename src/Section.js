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

    componentDidMount() {
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

                {this.props.section.type}
        
                <h5>
                    {menuItems.map((item, index) => <Item key={index} item={item} />)}
                </h5>
                <br></br>


            </div>
        )
    }
}