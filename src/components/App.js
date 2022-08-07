import React, { Component } from 'react';
import './App.css';
import AddTask from "./AddTask";
import TaskList from "./TaskList";

export default class App extends Component {
        state = {
            tasks:[
                {
                    id:0,
                    text: 'zagrać wreszcie w Wiedżmina 3',
                    date: "2023-02-15",
                    finishDate: null,
                    important: true,
                    active: true,
                },
                {
                    id:1,
                    text: 'wyuczyć angielski',
                    date: "2022-12-25",
                    finishDate: null,
                    important: true,
                    active: false,
                },
                {
                    id:2,
                    text: 'pójśc na rezonans',
                    date: "2022-08-12",
                    finishDate: null,
                    important: true,
                    active: true,
                },
                {
                    id:3,
                    text: 'pójśc do lekarza',
                    date: "2022-08-19",
                    finishDate: null,
                    important: true,
                    active: false,
                }
                ]
        }
  render() {
    return (
        <div>
          <AddTask/>
          <TaskList/>
        </div>
    )
  }
}