import React, { Component } from 'react'
import classes from './AddTodo.module.css'

class AddTodo extends Component {
    state = {
        value: ''
    }

    onChange = event => {
        const value = event.target.value
        this.setState({
            value
        })
        console.log(value);
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.setState({
            value: ''
        })
    }

    render() {
        return (
            <form onSubmit={event => this.onSubmit(event)} className={classes.AddTodo}>
                <input value={this.state.value}
                    onChange={event => this.onChange(event)}
                />
                <button
                    onClick={value => this.props.addTodo(this.state.value)}
                >Добавить задачу</button>
            </form>
        )
    }
}

export default AddTodo