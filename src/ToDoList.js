import React from 'react'

const ToDoList = (props) => {
    return (
        <div className= 'todo-style'>
            <b className= 'mark mark-pro' onClick = {() => {
                props.onSelect(props.id)} }>X</b>
            <li>{props.text}</li>
        </div>
    )
}

export default ToDoList;
