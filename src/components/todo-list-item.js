import React from 'react';

const TodoLstItem = ({ label, important = false }) => {
    
    const style = {
        color: important ? 'tomato' : 'black'
    };
    
    return <span style = {style}>{ label }</span>;
};

export default TodoLstItem;