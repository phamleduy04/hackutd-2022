import React, {Component} from 'react'

export default class List extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.price}</p>
                <p>{this.props.qty}</p>
                <p>{this.props.upc}</p>
            </div>
        )
    }
}