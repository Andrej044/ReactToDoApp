import React, { Component } from 'react';
import './App.css';
import AddTask from "./AddTask";
import TaskList from "./TaskList";

export default class App extends Component {

  render() {
    return (
        <div>
          <AddTask/>
          <TaskList/>
        </div>
    )
  }
}