import React,{Component} from "react";
import "./AddTask.css"
export default class AddTask extends Component{
    minDate = new Date().toISOString().slice(0,4) * 1 - 1 + "-01-01";
    maxDate = new Date().toISOString().slice(0,4) * 1 + 1 + "-12-31";
    state={
        text:"",
        checked: false,
        date: new Date().toISOString().slice(0, 10)
    }
    handleDate = (e) => {
        this.setState({
            date: e.target.value
        })
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
                            <input
                                type="date"
                                id="date"
                                value={this.state.date}
                                min={this.minDate}
                                max={this.maxDate}
                                onChange={this.handleDate}
                            />
                        </p>
                        <button className="addTask__button btn">Dodaj</button>
                    </section>
                </form>
            </div>
        )
    }
}