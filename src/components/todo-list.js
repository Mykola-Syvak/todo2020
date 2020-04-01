import React from 'react';

import TodoLstItem from './todo-list-item';
const TodoList = () => {
    return (
      <ul>
          <li><TodoLstItem /></li>
          <li><TodoLstItem /></li>
      </ul>
    );
  };

  export default TodoList;