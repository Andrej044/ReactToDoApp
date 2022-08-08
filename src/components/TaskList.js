import React from "react";
import Task from "./Task";

export default function TaskList(props){
    const active = props.tasks.filter(task => task.active);
    const done = props.tasks.filter(task => !task.active);
    const activeTasks = active.map(task =>
        <Task
            key = {task.id}
            id = {task.id}
            text = {task.text}
            date = {task.date}
            deleteTask = {props.deleteTask}
            changeTaskStatus = {props.changeTaskStatus}
        />)
    const doneTasks = done.map(task =>
        <Task
            key = {task.id}
            id = {task.id}
            text = {task.text}
            date = {task.date}
            deleteTask = {props.deleteTask}
            changeTaskStatus = {props.changeTaskStatus}
        />)

    return(
        <div className="tasks-wrapper">
            <h2>ToDo List</h2>
            <div className="task-list-wrapper">
                <h3 className="task-list__title">Zadanie do zrobienia <em>({active.length})</em></h3>
                <ul className="task-list__list task-list_active">
                    {active.length !== 0 ? activeTasks : <p>Brak zadań</p>}
                </ul>
            </div>
            <hr/>
            <div className="task-list-wrapper">
                <h3 className="task-list__title">Zadanie zrobione <em>({done.length})</em></h3>
                <ul className = "task-list__list task-list_done">
                    {doneTasks.slice(0,3)}
                </ul>
            </div>
        </div>
    )
}