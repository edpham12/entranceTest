import React, { PureComponent } from "react";
import "./App.css";
import './css/Todo.css'
import Todotask from "./components/Todotask";
import Todolist from './components/Todolist'


class App extends PureComponent {
  state = {
    todoList: [{
      id: 1,
      taskname: 'todo 1',
      text: 'description1',
      isCompleted: true
    },
    {
      id: 2,
      taskname: 'todo 2',
      text: 'description22',
      isCompleted: false
    }]
  }
  addTodo = (todo = {}) => {
    this.setState(preState => ({
      todoList: [...preState.todoList, todo]
    }))
  }


  render() {
    const { todoList } = this.state
    return (
      <div className="container">
        <Todotask addTodo={this.addTodo} />
        <Todolist
          todoList={todoList} />
      </div>
    );
  }
}
export default App;