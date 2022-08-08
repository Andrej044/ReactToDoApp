import React from "react";
import Task from "./Task";

export default function TaskList(){
    return(
        <div className="task-list-wrapper">
        <ul className="task-list task-list_active">
            <Task/>
        </ul>
            <hr/>
        <ul className = "task-list task-list_done">
            <li>Zadanie zrobionę</li>
        </ul>
        </div>
    )
}