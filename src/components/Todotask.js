import React, { memo, useState } from "react"

const Todotask = memo(props => {
    const [text, setText] = useState('')
    const { addTodo } = props
    const onAddTodo = (e = {}) => {
        if (text) {
            addTodo({
                id: new Date().valueOf(),
                text,
                isCompleted: false
            })
            setText('')
        }
    }
    return (
        <div className="taskContent">
            <h1>New Task</h1>
            <input
                placeholder="Add new task"
                onChange={(e) => setText(e.target.value)}
            />
            <h4>Description</h4>
            <textarea name="Text1" cols={40} rows={6}/>
            <div className="smtextContent">
                <h4>Due Date</h4>
                <input type="date" name="dateofbirth" id="dateofbirth" />
            </div>
            <div className="smtextContent">
                <div className="Priority">
                    <h4>Priority</h4>
                </div>
                <div className="select-style">
                    <select>
                        <option value="low">Low</option>
                        <option selected value="normal">
                            Normal
                        </option>
                        <option value="high">High</option>
                    </select>
                </div>
            </div>
            <div className="buttonA">
                <button type='button' onClick={(e) => onAddTodo(e)}>Add</button>
            </div>
        </div>
    )
})

export default Todotask