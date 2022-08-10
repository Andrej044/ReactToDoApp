import React from "react";


export default function Task(props){

    const style = {
        color:"red"
    }
    const {text, active, id, date, important} = props.tasks;
    console.log(props.tasks)

    if(active) {
        return(
            <li className="task-list__task">
               <h3 className="task-list__title">Task {id}</h3>
                <p className="task-list__content">
                    {important? <span style={style}>{text}</span> : text} - do <span>{date}</span>
                    {active ? <button onClick={props.changeTaskStatus.bind(this,id)}>Zostało zrobione</button> : null}
                    <button onClick={props.deleteTask.bind(this,id)}>X</button>
                </p>
            </li>
        )

    }else {
        return(
            <li className="task-list__task">
                <h3 className="task-list__title">Task {id}</h3>
                <p className="task-list__content">
                     {text} - do <span>{date}</span>
                    <button onClick={props.deleteTask.bind(this,id)}>X</button>
                </p>
            </li>
        )
    }

}