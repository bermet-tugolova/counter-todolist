import React from 'react';
import {useState} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TodoItem from '../TodoItem';
import {add_todo} from '../../store/actions/todoList'

const TodoList = ({state,add_todo}) => {
    const[inputValue,setInputvalue] = useState('')
    // console.log(state)
    return <div className="todo" style={styles}>
        <div>
            <h1 style={{fontSize: '45px',fontFamily: 'cursive'}}>To do list</h1>
            <input
                placeholder="type smth ..." 
                value={inputValue} 
                onChange={(e) => setInputvalue(e.target.value)
            }/>
            <button onClick={() => add_todo(inputValue)}>ADD</button>
        </div>
        <ul>
            {state.map((todo,id) => {
                return <TodoItem todo={todo} id={id} key={id}/>
            })}
        </ul>
    </div>
}

const styles = {
    width: '500px',
    marginLeft: '650px',
    marginTop: '120px'
}

const mapStatetoProps = state => ({
    state: state.todolist
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        add_todo
    },dispatch)
}

export default connect(mapStatetoProps,mapDispatchToProps)(TodoList)//возвращает state как аргумент