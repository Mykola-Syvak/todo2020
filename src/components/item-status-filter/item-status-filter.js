import React, { Component } from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
    render() {
        
        const  { allBtn, activeBtn, doneBtn } = this.props;
        
        return (
            <div className="btn-group">
                <button type="button"
                        className="btn btn-info"
                        onClick={allBtn}>All</button>
                <button type="button"
                        className="btn btn-outline-secondary"
                        onClick={activeBtn}>Active</button>
                <button type="button"
                        className="btn btn-outline-secondary"
                        onClick={doneBtn}>Done</button>
            </div>
        );
    }
};