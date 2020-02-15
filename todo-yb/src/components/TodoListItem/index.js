import React from 'react'
import './todoListItem.css'

export default class TodoListItem extends React.Component {

    state = {
        done: false,
    }

    onLabelClick = () => {
        this.setState({
            done: !this.state.done,
        })
    }

    render() {
        const { label, important = false } = this.props;
        const { done } = this.state;

        const style = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal',
        }

        return (
            <span className={done ? "todo-list-item done" : "todo-list-item"} >

                <span
                    className="todo-list-item-label"
                    style={style}
                    onClick={this.onLabelClick}>
                    {label}
                </span>
                <button type="button"
                    className="btn btn-outline-success btn-sm float-right">
                    <i className="fa fa-exclamation" />
                </button>
                <button type="button"
                    className="btn btn-outline-danger btn-sm float-right">
                    <i className="fa fa-trash-o" />
                </button>
            </span>
        )
    }

}
