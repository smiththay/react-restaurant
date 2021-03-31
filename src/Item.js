import React, { Component } from 'react'


export default class Items extends Component {
    constructor(props) {
        super(props);
}

    render() {
        console.log(this.props)
        return (
            <div>
                <br></br>
                <h3><b>{this.props.item.name}</b></h3>
                <p>{this.props.item.description}</p>
                <p>${Math.floor(Math.random() * (100 - 10 + 1)) + 10}.{Math.floor(Math.random() * (99 - 10 + 1)) + 10}</p>
            </div>

        )
    }
}
