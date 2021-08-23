import React, { memo } from 'react'
import Todo from './Todo'

const Todolist = memo(props => {
    const { todoList } = props
    return (
        <div className="taskContent">
            <h1>To Do List</h1>
            {
                todoList.map(todo => <Todo {...{todo}} />)
            }

        </div>
    )
})

export default Todolist