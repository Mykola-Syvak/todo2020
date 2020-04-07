import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddFrom extends Component {
    render() {
        return (
            <div className="item-add-form">
                <button className="btn btn-outline-secondary"
                        onClick={console.log("ADD")}>
                        Add Item
                </button>
            </div>
        )
    }
}