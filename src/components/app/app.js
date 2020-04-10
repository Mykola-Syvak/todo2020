
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
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch')
    ],
    filter: 'all',
    term: ''
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }

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
    const newItem = this.createTodoItem(text);
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

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
      
      const oldItem = arr[idx];
      const newItem = {...oldItem, [propName]: !oldItem[propName]};
      return [
        ...arr.slice(0, idx),
        newItem,
        ...arr.slice(idx + 1)
      ];
  };

  onToggleDone = (id) => {
    this.setState(({ todoData, activeTasks, doneTasks }) => {

      const newArrayActive = todoData.filter((arr) => arr.done === false );
      const newArrayDone = todoData.filter((arr) => arr.done === true );

      return {
        todoData: this.toggleProperty(todoData, id, 'done'),
        activeTasks: newArrayActive,
        doneTasks: newArrayDone
      }
    });
  };

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    });
  };

  onSearchChange = (term) => {
    this.setState ({ term });
  }

  onFilterChange = (filter) => {
    this.setState ({ filter });
  }

  search(items, term) {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.label
        .toLowerCase()
        .indexOf(term.toLowerCase()) > -1;
    });
  } 

  filter(items, filter) {
    switch(filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.done);
      case 'done':
        return items.filter((item) => item.done);
      default:
        return items;
    }
  }

  render () {
    const { todoData, term, filter } = this.state;
    const visibleItems = this.filter(this.search(todoData, term), filter);

    const doneCount = todoData
      .filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;
    
    return (
      <div className="indexClass">
        <AppHeader toDo={todoCount} done={doneCount}/>
        <span className="search-panel-group">
          <SearchPanel 
            onSearchChange={this.onSearchChange} />
          <ItemStatusFilter
            filter={filter}
            onFilterChange={this.onFilterChange} />
        </span>
        <TodoList
          todos={visibleItems}
          onDeleted={ this.deleteItem }
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant} />
        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    );
  }
  
};