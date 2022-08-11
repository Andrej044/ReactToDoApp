import React, { Component } from 'react';
import './App.css';
import AddTask from "./AddTask";
import TaskList from "./TaskList";

export default class App extends Component {
    counter = 5;
    state = {
        tasks:[
                {
                    id:1,
                    text: 'zagrać wreszcie w Wiedżmina 3',
                    date: "2023-02-15",
                    finishDate: null,
                    important: false,
                    active: true,
                },
                {
                    id:2,
                    text: 'wyuczyć angielski',
                    date: "2022-12-25",
                    finishDate: null,
                    important: false,
                    active: true,
                },
                {
                    id:3,
                    text: 'pójśc na rezonans',
                    date: "2022-08-12",
                    finishDate: null,
                    important: true,
                    active: true,
                },
                {
                    id:4,
                    text: 'pójśc do lekarza',
                    date: "2022-08-19",
                    finishDate: null,
                    important: true,
                    active: true,
                }
                ]
    }
    deleteTask = (id) => {
            console.log("delete" + id);
            const tasks = this.state.tasks.concat();
            const index = tasks.findIndex(task => task.id === id);
            tasks.splice(index,1);
            this.setState({
                tasks
            })
        }
    changeTaskStatus = (id) => {
             console.log("change status" + id);
             const tasks = [...this.state.tasks];
             tasks.forEach(task => {
                 if(task.id === id) {
                     task.active = false;
                     task.finishDate = new Date().getTime();
                 }
             })
            this.setState({
                tasks
            })
        }
    addTTask = (text, date, important) =>{
        const task = {
            id:this.counter,
            text: text,
            date: date,
            important: important,
            active: true,
            finishDate: null,
        }
        this.counter++
        this.setState(prevState => ({
            tasks: [...prevState.tasks, task]
        }))
        return true;
    }
  render() {
    return (
        <div className="app-wrapper">
            <h1>ToDo App</h1>
          <AddTask add = {this.addTTask}/>
            <hr/>
          <TaskList
              tasks = { this.state.tasks}
              deleteTask = {this.deleteTask}
              changeTaskStatus = {this.changeTaskStatus}/>
        </div>
    )
  }
}