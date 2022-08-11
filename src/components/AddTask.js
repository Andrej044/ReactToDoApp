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
    handleText = (e) => {
        this.setState({
            text: e.target.value
        })
    }
    handleCheck = (e) => {
            this.setState({
                checked: e.target.checked
            })
    }
    handleClick = (e) => {
        e.preventDefault();
        const {text, date, checked} = this.state;
        const add = this.props.add(text, date, checked);
        if(add){
            this.setState({
                text:"",
                checked: false
            })
        }
    }
    render() {
        return(
            <div className="addTask">
                <form className="addTask-form">
                    <section className="addTask-section">
                        <h2 className="addTask__title">Dodaj zadanie i wybierz datę do kiedy zrobić.</h2>
                        <p className="addTask__input">
                            <input
                                id="inputTask"
                                type="text"
                                placeholder="dodaj zadanie"
                                value={this.state.text}
                                onChange={this.handleText}
                            />
                        </p>
                       <p className="addTask__input addTask__priority">
                            <input
                                type="checkbox"
                                id="important"
                                checked={this.state.checked}
                                onChange={this.handleCheck}
                            />
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
                        <button className="addTask__button btn" onClick={this.handleClick}>Dodaj</button>
                    </section>
                </form>
            </div>
        )
    }
}