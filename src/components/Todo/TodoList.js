import classes from './TodoList.module.css'
import PropTypes from 'prop-types'

function TodoList(props) {
    return (
        <>
            {props.todos.map((todo, index) => {
                let cls = []
                if (todo.completed) {
                    cls.push('done')
                } else {
                    cls = []
                }
                return (
                    <li key={index}>
                        <span className={classes[cls.join(' ')]}>
                            <input
                                checked={todo.completed}
                                onChange={() => props.completeTodo(todo.id)}
                                type='checkbox' />

                            <strong>{index + 1}</strong>
                            &nbsp;
                            {todo.title}
                        </span>
                        <button
                            onClick={() => props.deleteTodo(todo.id)}
                            className={classes.btn}>&times;</button>
                    </li>
                )
            })}
        </>
    )
}

TodoList.propsType = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TodoList