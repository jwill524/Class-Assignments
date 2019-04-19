import React, {Component} from 'react';
import '../css/Board.css';
import Notes from './Notes.js';


class Board extends Component {
    constructor() {
        super();
    }

    render(){
        return (
        <div>
            <div className="div-board">
                <div className="row">
                <Notes title="Class Notes" body="Use constructors when extending another  class"/>
                <Notes title= "My address" body="nunya"/>
                <Notes title= "React Notes" body="Everything in React is component"/>
                </div>
            </div>
            <div>
                <button className="btn btn-success add-button">Add</button>
            </div>
        </div>
        )
    }
}
export default Board;