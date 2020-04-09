
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
    ]
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
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
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

  activeBtn = (id) => {
    this.setState(({ todoData }) => {

      const newArray = todoData.filter((arr) => arr.done === false );
      
      return {
        todoData: newArray
      };
    })
  };
  

  render () {
    const { todoData } = this.state;
    const doneCount = todoData
      .filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;
    
    return (
      <div className="indexClass">
        <AppHeader toDo={todoCount} done={doneCount}/>
        <span className="search-panel-group">
          <SearchPanel />
          <ItemStatusFilter
            allBtn={this.allBtn}
            activeBtn={this.activeBtn}
            doneBtn={this.doneBtn} />
        </span>
        <TodoList
          todos={todoData}
          onDeleted={ this.deleteItem }
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant} />
        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    );
  }
  
};