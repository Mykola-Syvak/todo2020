import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {

    constructor() {
        super();
        this.onLabelClick = () => {
            console.log(`Done: ${this.props.label}`);
        };
    }

    render() {

        const  { label, important = false, done = false } = this.props;

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }
        if (important) {
            classNames += ' important';
        };
        
        return (
            <span className={classNames}>
                <span className="todo-list-item-label"
                      onClick={ this.onLabelClick }>
                    { label }
                </span>
                <span className="todo-list-button">
                    <button type="button"
                            className="btn btn-outline-success btn-sm">
                        <i className="fa fa-exclamation" />
                    </button>
                    <button type="button"
                            className="btn btn-outline-danger btn-sm">
                        <i className="fa fa-trash-o" />
                    </button>
                </span>
        </span>);
    }
}
