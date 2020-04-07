import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddFrom extends Component {
    
   onButtonAddClick = () => console.log('URA');

    render() {
        return (
            <div className="item-add-form">
                <button className="btn btn-outline-secondary"
                        onClick={this.onButtonAddClick}>
                        Add Item
                </button>
            </div>
        )
    }
}