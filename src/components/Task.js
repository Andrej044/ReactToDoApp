import React from "react";


export default function Task(props){
    const {text, id, date, deleteTask, changeTaskStatus} = props;
    return(
        <li className="task-list__task">
           <h3 className="task-list__title">Task {id}</h3>
            <p className="task-list__content">
                {text} - do <span>{date}</span>
                <button onClick={changeTaskStatus.bind(this,id)}>Zostało zrobione</button>
                <button onClick={deleteTask.bind(this,id)}>X</button>
            </p>
        </li>
    )
}