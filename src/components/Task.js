import React from "react";


export default function Task(props){

    const style = {
        color:"red",
        fontWeight:"bold"
    }
    const {text, active, id, date, important, finishDate} = props.tasks;
    console.log(props.tasks)

    if(active) {
        return(
            <li className="task-list__task">
               <h3 className="task-list__title">Zadanie {id}</h3>
                <p className="task-list__content">
                    {important? <span style={style}>{text}</span> : text} - do <span>{date}</span>
                    {active ? <button onClick={props.changeTaskStatus.bind(this,id)}>Zostało zrobione</button> : null}
                    <button onClick={props.deleteTask.bind(this,id)}>X</button>
                </p>
            </li>
        )

    }else {
            const doneDate = new Date(finishDate).toLocaleString();
        return(
            <li className="task-list__task">
                <h3 className="task-list__title">Zadanie {id}</h3>
                <p className="task-list__content">
                   <strong>{text}</strong> - do <span>{date}</span>
                    <br/>
                    - potwierdzenie wykonania <span>{doneDate}</span>
                    <button onClick={props.deleteTask.bind(this,id)}>X</button>
                </p>
            </li>
        )
    }

}