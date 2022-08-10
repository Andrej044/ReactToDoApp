import React,{Component} from "react";

export default class AddTask extends Component{
    state={
        text:"",
        checked: true, 
    }
    render() {
        return(
            <div className="addTask">
                <form className="addTask-form">
                    <input id="inputTask" type="text" placeholder="dodaj zadanie" value={this.state.text}/>
                    <input type="checkbox" id="important" checked={this.state.checked}/>
                    <label htmlFor="important">Priorytet</label>
                    <label htmlFor="date">Do kiedy zrobić</label>
                    <input type="date" id="date" value="2022-08-10" min="2022-01-01" max="2023-12-31"/>
                    <button>Dodaj</button>
                </form>
            </div>
        )
    }
}