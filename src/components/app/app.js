
import React, { Component } from 'react';
import './app.css';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {
  
  maxId = 100;

  state = {
    todoData: [
      { label: 'Drink Coffee', important: false, id: 1 },
      { label: 'Make Awesome App', important: true, id: 2 },
      { label: 'Have a lunch', important: false, id: 3 },
    ],
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {

      const idx = todoData.findIndex((el) => el.id === id);
      
      const newArray = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1)
      ];

      return {
        todoData: newArray
      };
    })
  };

  addItem = (text) => {
    // generate id
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++
    };
    //add element to array
    this.setState(({ todoData }) => {
      const newArr = [
        ...todoData,
        newItem
      ];

      return {
        todoData: newArr
      }
    });

  };

  onToggleImportant = (id) => {
    console.log('Toggle Important', id);
  };

  onToggleDone = (id) => {
    console.log('Toggle Done', id); 
  };

  render () {
    return (
      <div className="indexClass">
        <AppHeader />
        <span className="search-panel-group">
          <SearchPanel />
          <ItemStatusFilter />
        </span>
        <TodoList
          todos={this.state.todoData}
          onDeleted={ this.deleteItem }
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant} />
        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    );
  }
  
};