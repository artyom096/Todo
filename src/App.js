import classes from './App.module.css';
import React, { Component } from 'react'
import TodoList from './components/Todo/TodoList'
import AddTodo from './components/Todo/AddTodo/AddTodo';

class App extends Component {

    state = {
        todos: [
            { id: 1, title: 'Сходить за хлебом', completed: false },
            { id: 2, title: 'Сходить за молоком', completed: false },
            { id: 3, title: 'Сходить за себя и за Сашку', completed: false },
        ]
    }

    completeTodo = id => {
        this.state.todos.map(todo => {

            if (todo.id == id) {
                todo.completed = !todo.completed
                this.setState({
                    todo
                })
            }
        })
    }

    deleteTodo = id => {
        console.log(id);
        let todos = this.state.todos.filter(todo => todo.id !== id)
        console.log(todos);
        this.setState({
            todos
        })
    }

    addTodo = value => {
        console.log(value);
        let todos = this.state.todos.concat()
        todos.push({
            id: Date.now(),
            title: value,
            completed: false
        })
        this.setState({
            todos
        })
    }

    render() {
        return (
            <div className={classes.App}>
                <h1>Список задач</h1>
                <AddTodo addTodo={value => this.addTodo(value)} />
                <ul className={classes.list}>
                    {this.state.todos.length ? <TodoList
                        todos={this.state.todos}
                        deleteTodo={this.deleteTodo}
                        completeTodo={this.completeTodo} />
                        : <p>Список дел пока пуст!</p>}
                </ul>
            </div>
        )
    }
}

export default App;