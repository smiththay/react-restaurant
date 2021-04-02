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
                <div className="card">
                    <div className="card-header">
                        <b> {this.props.item.name}</b>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.item.description}</h5>
                         <p className="card-text">${this.props.item.price}.{this.props.item.price}</p> 
                    </div>
                </div>
            </div>

        )
    }
}
