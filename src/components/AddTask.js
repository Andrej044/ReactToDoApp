import React,{Component} from "react";
import "./AddTask.css"
export default class AddTask extends Component{
    state={
        text:"",
        checked: true, 
    }
    render() {
        return(
            <div className="addTask">
                <form className="addTask-form">
                    <section className="addTask-section">
                        <h2 className="addTask__title">Dodaj zadanie i wybierz datę do kiedy zrobić.</h2>
                        <p className="addTask__input">
                            <input id="inputTask" type="text" placeholder="dodaj zadanie" value={this.state.text}/>
                        </p>
                       <p className="addTask__input addTask__priority">
                            <input  type="checkbox" id="important" checked={this.state.checked}/>
                            <label htmlFor="important">Priorytet</label>
                       </p>
                        <p className="addTask__input addTask__date">
                            <label htmlFor="date">Do kiedy zrobić</label>
                            <input type="date" id="date" value="2022-08-10" min="2022-01-01" max="2023-12-31"/>
                        </p>
                        <button className="addTask__button btn">Dodaj</button>
                    </section>
                </form>
            </div>
        )
    }
}