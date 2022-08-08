import React from "react";


export default function Task(props){
    const {text, id, date} = props;
    return(
        <li className="task-list__task">
           <h3 className="task-list__title">Task {id}</h3>
            <p className="task-list__content">
                {text} - do <span>{date}</span>
                <button>Zostało zrobione</button>
                <button>X</button>
            </p>
        </li>
    )
}