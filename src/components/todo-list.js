import React from 'react';

import TodoLstItem from './todo-list-item';
const TodoList = () => {
    return (
      <ul>
          <li><TodoLstItem label="Drink Coffee"/></li>
          <li><TodoLstItem
           label="Build React App"
           important /></li>
      </ul>
    );
  };

  export default TodoList;