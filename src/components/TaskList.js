import React from "react";
import Task from "./Task";
export default function TaskList(props){

    const active = props.tasks.filter(task => task.active);
    const done = props.tasks.filter(task => !task.active);

    if(done.length > 2) {
        done.sort((a,b) => b.finishDate - a.finishDate);
    }
    if(active.length>2) {
        active.sort((a,b) => {
             a = a.text.toLowerCase();
             b= b.text.toLowerCase();
             if(a < b) return -1;
             if(a > b) return 1;
             return 0
        })
    }
    const activeTasks = active.map(task =>
        <Task
            key = {task.id}
            tasks={task}
            deleteTask = {props.deleteTask}
            changeTaskStatus = {props.changeTaskStatus}
        />)
    const doneTasks = done.map(task =>
        <Task
            key = {task.id}
            tasks={task}
            deleteTask = {props.deleteTask}
            changeTaskStatus = {props.changeTaskStatus}
        />)


    return(
        <div className="tasks-wrapper">
            <div className="task-list-wrapper">
                <h3 className="task-list__title">Zadanie do zrobienia <em>({active.length})</em></h3>
                <ul className="task-list__list task-list_active">
                    {active.length !== 0 ? activeTasks : <li>Brak zadań</li>}
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