import React from "react";


export default function Task(props){

    const style = {
        color:"red",
        fontWeight:"bold"
    }
    const {text, active, id, date, important, finishDate} = props.tasks;
    if(active) {
        return(
            <li className="task-list__task">
               <h3 className="task-list__title">Zadanie</h3>
                <p className="task-list__content">
                    {important? <span className="task-list__text" style={style}>{text}</span> : <span className="task-list__text">{text}</span>}
                    <span className="task-list__date">  - do { date} </span>
                    <span className="task-list__buttons">
                        {active ? <button className="btn" onClick={props.changeTaskStatus.bind(this,id)}>Zostało zrobione</button> : null}
                        <button className="btn" onClick={props.deleteTask.bind(this,id)}>X</button>
                    </span>
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
                    <button className="btn" onClick={props.deleteTask.bind(this,id)}>X</button>
                </p>
            </li>
        )
    }
}