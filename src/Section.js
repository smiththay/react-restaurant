import React, { Component } from 'react'
import Axios from 'axios';
import Item from './Item';

export default class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItems: [

            ],
        }
    };
    componentDidUpdate() {
        window.localStorage.setItem(this.props.section.type, JSON.stringify(this.state.menuItems))
    }

    componentDidMount() {
        let menuItems = window.localStorage.getItem(this.props.section.type)

        if (menuItems) {
            this.setState({ menuItems: JSON.parse(menuItems) })

        } else {

            if (this.props.section.type === 'breakfast') {

                Axios.get('http://awesomeincbootcampapi-ianrios529550.codeanyapp.com:3000/public/api/menu/type/' + this.props.section.id)
                    .then((response) => {


                        let newData = response.data.map(item => {
                            item.price = Math.floor(Math.random() * (99 - 10 + 1)) + 10;
                            return item
                        })
                        this.setState({ menuItems: this.state.menuItems.concat(response.data) })


                    })
                    .catch(function (error) {
                        console.log(error);
                    })

                Axios.get('http://awesomeincbootcampapi-ianrios529550.codeanyapp.com:3000/public/api/menu/type/' + this.props.section.id)
                    .then((response) => {


                        let newData = response.data.map(item => {
                            item.price = Math.floor(Math.random() * (99 - 10 + 1)) + 10;
                            return item
                        })
                        this.setState({ menuItems: this.state.menuItems.concat(response.data) })
                    })
                    .catch(function (error) {
                        console.log(error);
                    })


            } else {

                Axios.get('http://awesomeincbootcampapi-ianrios529550.codeanyapp.com:3000/public/api/menu/type/' + this.props.section.id)
                    .then((response) => {
                        console.log(response.data)

                        let newData = response.data.map(item => {
                            item.price = Math.floor(Math.random() * (99 - 10 + 1)) + 10;
                            return item
                        })
                        this.setState({ menuItems: newData })
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            }
        }
    }

    render() {
        console.log(this.props.section)
        let { menuItems } = this.state;

        return (
            <div>
                <hr></hr>
                <b> <u>{this.props.section.type} </u></b>
                <h5> {menuItems.map((item, index) => <Item key={index} item={item} />)}</h5>
                <br></br>
            </div>
        )
    }
}