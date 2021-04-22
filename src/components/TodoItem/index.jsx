import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import {toggle_todo,delete_todo} from '../../store/actions/todoList';
import './TodoItem.css'

const TodoItem = ({todo,toggle_todo,id,delete_todo}) => {
    return <div>
        <span style={
        {
            textDecoration: todo.complete ? 'line-through' : 'none'
        }
        }>
            {todo.text}
            <button className="btn2" onClick={() => toggle_todo(id)}>complete</button>
            <button className="btn2" onClick={() => delete_todo(id)}>X</button>
        </span>
    </div>
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        toggle_todo,
        delete_todo
    },dispatch)
}

//первый аргумент null,если state не нужен
export default connect(null,mapDispatchToProps)(TodoItem)