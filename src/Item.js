import React, { Component } from 'react'


export default class Items extends Component {

    render() {
        console.log(this.props)
        return (
            <div>
                 <h3><b>{this.props.item.name}</b></h3> 
                 <p>{this.props.item.description}</p>
            
            </div>)
    }
}
