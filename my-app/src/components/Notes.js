import React, {Component} from 'react';
import '../css/Notes.css';
import PropTypes from 'prop-types';


class Notes extends Component {
    constructor (){
        super();
    }
    render(){
        return(
            <div className="col-sm-6">
                <div className="card card-view">
                    <div className="card-body">
                     <h5 className="card-title">{this.props.title}</h5>
                     <p>{this.props.body}</p>
                     <button className="btn btn-info">Edit</button>
                     <button className="btn btn-ddanger">Delete</button>
                    </div>
                </div>
            </div>

        )
    }
}

Notes.defaultProps ={
    title: " a cool title",
    body: "a cool body",
};
Notes.propTypes ={
    title: PropTypes.string
}

export default Notes;