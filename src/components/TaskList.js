import React from "react";
import Task from "./Task";

export default function TaskList(props){
    const tasks = props.tasks.map(task =>
        <Task
            key = {task.id}
            id = {task.id}
            text = {task.text}
            date = {task.date}
            deleteTask = {props.deleteTask}
            changeTaskStatus = {props.changeTaskStatus}
        />)
    return(
        <div className="task-list-wrapper">
            <h2>Zadanie do zrobienia</h2>
        <ul className="task-list task-list_active">
            {tasks}
        </ul>
            <hr/>
        <ul className = "task-list task-list_done">
            <li>Zadanie zrobionę(0)</li>
        </ul>
        </div>
    )
}