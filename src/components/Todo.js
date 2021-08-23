import React, { memo } from 'react'

const Todo = memo(props => {
    const { todo } = props
    return (
        <div>
            <div className="tasklist">
                <div className="tasklist-name">
                    <input className="toggle" type="checkbox" id="taskName" checked={todo.isCompleted} />
                    <label htmlFor="taskName">{todo.text}</label>
                </div>
                <div className="checkButton">
                    <button id="buttonDone">Done</button>
                    <button id="buttonRemove">Remove</button>
                </div>
            </div>
        </div>

    )
})

export default Todo