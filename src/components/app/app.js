
import React from 'react';
import './app.css';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

const App = () => {
  
  const todoData = [
    { label: 'Drink Coffee', important: false, id: 1 },
    { label: 'Make Awesome App', important: true, id: 2 },
    { label: 'Have a lunch', important: false, id: 3 }
  ];

  return (
    <div className="indexClass">
      <AppHeader />
      <span className="search-panel-group">
        <SearchPanel />
        <ItemStatusFilter />
      </span>
      <TodoList todos={todoData} />
    </div>
  );
};

export default App;